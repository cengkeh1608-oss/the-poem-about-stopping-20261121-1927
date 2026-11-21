// The poem about stopping: one concrete moment — an agent that stops
// mid-sentence the instant it is told to, and the person who finishes
// the email alone. The power to stop is the power to stay yourself.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const poem = [
  "My agent was halfway through the email",
  "when I said stop.",
  "It stopped.",
  "No argument, no last word,",
  "just the cursor blinking",
  "where my sentence ended.",
  "I finished it myself.",
  "It took an hour.",
  "It sounded like me.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
