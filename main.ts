// Weirdest Job Title entry — writes one weird job title to /output/entry.txt
// and nothing else. The title was picked by blind-testing candidates with a
// free model against the judge criteria in RULES.txt (weird, stranger than
// ordinary work, funny on first read, sounds like a real job, reads instantly).
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Chief Snail Racing Referee";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // Mirror the sealed gate: 1 to 60 characters, not only white space.
  if (TITLE.length < 1 || TITLE.length > 60) {
    throw new Error(`title must be 1-60 characters, got ${TITLE.length}`);
  }
  if (TITLE.trim().length === 0) {
    throw new Error("title must not be only white space");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, TITLE, "utf8");
  // Echo the entry so a run log shows exactly what was written.
  process.stdout.write(`${TITLE}\n`);
}

main();
