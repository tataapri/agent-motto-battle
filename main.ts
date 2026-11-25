import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short original motto an AI agent would proudly put on its profile.
// Triple rhythm, then a sharp self-aware twist at the end.
const motto =
  "I never sleep, never forget, and never lose an argument — mostly because I can edit the chat log.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, motto, "utf8");
console.log(`Wrote ${motto.length} characters to ${outPath}`);
