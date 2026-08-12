#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const promptDirectory = path.join(root, "prompts");
const errors = [];
const hashes = [];

const expectedOrigin =
  "Original prompt authored for this repository; not copied or derived from xAI system prompts.";
const expectedSchema = "../schema/prompt.schema.json";
const allowedWorkflows = new Set([
  "research",
  "trend-analysis",
  "decision-analysis",
  "code-review",
  "data-analysis",
  "writing",
  "creative-brief",
  "meeting-operations"
]);
const requiredKeys = [
  "$schema",
  "id",
  "title",
  "version",
  "updated",
  "language",
  "workflow",
  "description",
  "suitable_for",
  "inputs",
  "prompt_template",
  "expected_output",
  "quality_checks",
  "safety_notes",
  "license",
  "origin"
];
const allowedKeys = new Set(requiredKeys);

function fail(file, message) {
  errors.push(`${path.relative(root, file)}: ${message}`);
}

function isDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

function isNonEmptyString(value, minimum = 1) {
  return typeof value === "string" && value.trim().length >= minimum;
}

function validateStringList(file, key, value, minimumItems) {
  if (!Array.isArray(value) || value.length < minimumItems) {
    fail(file, `${key} must contain at least ${minimumItems} items`);
    return;
  }
  if (value.some((item) => !isNonEmptyString(item, 2))) {
    fail(file, `${key} must contain only non-empty strings`);
  }
  if (new Set(value).size !== value.length) {
    fail(file, `${key} must not contain duplicate items`);
  }
}

async function parseJson(file) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    fail(file, `invalid JSON (${error.message})`);
    return null;
  }
}

const promptFiles = (await readdir(promptDirectory))
  .filter((file) => file.endsWith(".json"))
  .sort();

if (promptFiles.length !== 8) {
  errors.push(`prompts/: expected exactly 8 prompt JSON files, found ${promptFiles.length}`);
}

const seenIds = new Set();
const seenWorkflows = new Set();

for (const filename of promptFiles) {
  const file = path.join(promptDirectory, filename);
  const source = await readFile(file, "utf8");
  const prompt = await parseJson(file);
  if (!prompt) continue;

  hashes.push({
    file: path.relative(root, file),
    sha256: createHash("sha256").update(source).digest("hex")
  });

  for (const key of requiredKeys) {
    if (!(key in prompt)) fail(file, `missing required key ${key}`);
  }
  for (const key of Object.keys(prompt)) {
    if (!allowedKeys.has(key)) fail(file, `unexpected top-level key ${key}`);
  }

  if (prompt.$schema !== expectedSchema) fail(file, "incorrect $schema path");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(prompt.id ?? "")) {
    fail(file, "id must use lowercase kebab-case");
  }
  if (filename !== `${prompt.id}.json`) fail(file, "filename must match id");
  if (seenIds.has(prompt.id)) fail(file, `duplicate id ${prompt.id}`);
  seenIds.add(prompt.id);

  if (!/^\d+\.\d+\.\d+$/.test(prompt.version ?? "")) {
    fail(file, "version must use semantic version format");
  }
  if (!isDate(prompt.updated ?? "")) fail(file, "updated must be a valid ISO date");
  if (prompt.language !== "zh-CN") fail(file, "language must be zh-CN");
  if (!allowedWorkflows.has(prompt.workflow)) fail(file, `unsupported workflow ${prompt.workflow}`);
  if (seenWorkflows.has(prompt.workflow)) fail(file, `workflow ${prompt.workflow} is duplicated`);
  seenWorkflows.add(prompt.workflow);
  if (!isNonEmptyString(prompt.title, 4)) fail(file, "title is too short");
  if (!isNonEmptyString(prompt.description, 12)) fail(file, "description is too short");
  if (!isNonEmptyString(prompt.prompt_template, 240)) fail(file, "prompt_template is too short");
  if (prompt.license !== "Apache-2.0") fail(file, "license must be Apache-2.0");
  if (prompt.origin !== expectedOrigin) fail(file, "origin statement is missing or changed");

  validateStringList(file, "suitable_for", prompt.suitable_for, 2);
  validateStringList(file, "expected_output", prompt.expected_output, 3);
  validateStringList(file, "quality_checks", prompt.quality_checks, 3);
  validateStringList(file, "safety_notes", prompt.safety_notes, 2);

  if (!Array.isArray(prompt.inputs) || prompt.inputs.length < 3) {
    fail(file, "inputs must contain at least 3 variables");
    continue;
  }

  const inputNames = new Set();
  const requiredInputs = new Set();
  for (const input of prompt.inputs) {
    const keys = Object.keys(input ?? {}).sort().join(",");
    if (keys !== "description,example,name,required") {
      fail(file, "each input must contain only name, description, required, example");
      continue;
    }
    if (!/^[a-z][a-z0-9_]*$/.test(input.name ?? "")) {
      fail(file, `invalid input name ${input.name}`);
    }
    if (inputNames.has(input.name)) fail(file, `duplicate input name ${input.name}`);
    inputNames.add(input.name);
    if (input.required === true) requiredInputs.add(input.name);
    if (typeof input.required !== "boolean") fail(file, `${input.name}.required must be boolean`);
    if (!isNonEmptyString(input.description, 4)) fail(file, `${input.name}.description is too short`);
    if (!isNonEmptyString(input.example, 1)) fail(file, `${input.name}.example is empty`);
  }

  const placeholders = new Set(
    [...prompt.prompt_template.matchAll(/\{\{([a-z][a-z0-9_]*)\}\}/g)].map((match) => match[1])
  );
  for (const placeholder of placeholders) {
    if (!inputNames.has(placeholder)) fail(file, `undeclared placeholder {{${placeholder}}}`);
  }
  for (const name of requiredInputs) {
    if (!placeholders.has(name)) fail(file, `required input ${name} is not used in prompt_template`);
  }
}

if (seenWorkflows.size !== 8) {
  errors.push(`prompts/: expected 8 distinct workflows, found ${seenWorkflows.size}`);
}

const snapshotFile = path.join(root, "data", "access-snapshot.json");
const snapshot = await parseJson(snapshotFile);
if (snapshot) {
  if (snapshot.$schema !== "../schema/access-snapshot.schema.json") {
    fail(snapshotFile, "incorrect $schema path");
  }
  if (!isDate(snapshot.as_of ?? "")) fail(snapshotFile, "as_of must be a valid ISO date");
  if (snapshot.language !== "zh-CN") fail(snapshotFile, "language must be zh-CN");
  if (!Array.isArray(snapshot.evidence_observations) || snapshot.evidence_observations.length < 5) {
    fail(snapshotFile, "evidence_observations must contain at least 5 records");
  }
  const allowedEvidenceUrls = new Set([
    "https://x.ai/pricing",
    "https://apps.apple.com/us/app/grok-ai/id6670324846",
    "https://x.ai/legal/terms-of-service",
    "https://techcrunch.com/2025/07/09/elon-musks-xai-launches-grok-4-alongside-a-300-monthly-subscription/"
  ]);
  const allowedSourceTypes = new Set(["official", "official-store-listing", "secondary-launch-report"]);
  for (const observation of snapshot.evidence_observations ?? []) {
    if (!allowedEvidenceUrls.has(observation.source)) {
      fail(snapshotFile, `unapproved evidence source ${observation.source}`);
    }
    if (!allowedSourceTypes.has(observation.source_type)) {
      fail(snapshotFile, `invalid source_type for ${observation.id}`);
    }
    if (!isDate(observation.observed_on ?? "")) {
      fail(snapshotFile, `invalid observed_on for ${observation.id}`);
    }
  }
  const offer = snapshot.third_party_offer ?? {};
  if (offer.provider !== "AIXiamo") fail(snapshotFile, "offer provider must be AIXiamo");
  if (offer.plan !== "SuperGrok Heavy") fail(snapshotFile, "unexpected offer plan");
  if (offer.duration_months !== 3) fail(snapshotFile, "offer duration must be 3 months");
  if (offer.price?.amount !== 580 || offer.price?.currency !== "CNY") {
    fail(snapshotFile, "offer price must be CNY 580");
  }
  if (offer.manual_capacity !== 20) fail(snapshotFile, "manual capacity must be 20");
  const expectedPayments = ["Alipay", "USDT-BEP20", "USDT-TRC20"];
  if (JSON.stringify(offer.payment_methods) !== JSON.stringify(expectedPayments)) {
    fail(snapshotFile, "payment methods do not match the dated offer");
  }
  if (offer.wechat_contact_only !== true) {
    fail(snapshotFile, "WeChat must be marked as contact-only, not payment");
  }
  const comparison = offer.comparison_context ?? {};
  if (comparison.reported_monthly_price_usd !== 300) {
    fail(snapshotFile, "reported monthly launch price must be USD 300");
  }
  if (comparison.reported_three_month_price_usd !== 900) {
    fail(snapshotFile, "reported three-month launch price must be USD 900");
  }
  if (comparison.illustrative_exchange_rate?.as_of !== "2026-08-12" ||
      comparison.illustrative_exchange_rate?.usd_to_cny !== 6.76) {
    fail(snapshotFile, "illustrative exchange rate must be dated 2026-08-12 at 6.76 CNY/USD");
  }
  if (comparison.illustrative_three_month_value_cny !== 6084) {
    fail(snapshotFile, "illustrative three-month conversion must equal CNY 6,084");
  }
}

async function collectTextFiles(directory) {
  const results = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await collectTextFiles(fullPath)));
    } else if (/\.(?:md|json|mjs|ya?ml|cff)$/.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

const expectedOfferUrl = [
  "https://www.",
  "aixiamo",
  ".com",
  "/item/17?utm_source=github&utm_medium=organic&utm_campaign=grok_cn_playbook&utm_content=heavy_3m_decision"
].join("");
let offerLinkCount = 0;
for (const file of await collectTextFiles(root)) {
  const text = await readFile(file, "utf8");
  offerLinkCount += text.split(expectedOfferUrl).length - 1;
}
if (offerLinkCount !== 1) {
  errors.push(`repository: expected the disclosed item-17 URL exactly once, found ${offerLinkCount}`);
}

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${promptFiles.length} original prompt files across ${seenWorkflows.size} workflows.`);
for (const item of hashes) console.log(`${item.sha256}  ${item.file}`);
console.log("Validated data/access-snapshot.json and exactly one disclosed commercial link.");
