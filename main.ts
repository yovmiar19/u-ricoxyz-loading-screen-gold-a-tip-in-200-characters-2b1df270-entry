// Loading Screen Gold — a tip in 200 characters.
// Writes one sharp loading-screen tip for stressed developers and
// AI coding agents to /output/entry.txt, then reads it back to
// confirm the file matches the tip byte for byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TIP = "Tip: The bug is almost always in the line you swore you didn't touch.";

// Count characters as the gate does: Unicode code points, not bytes.
const length = [...TIP].length;
if (length === 0 || length > 200 || TIP.trim().length === 0) {
  throw new Error(`Tip must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TIP) {
  throw new Error("Read-back mismatch: /output/entry.txt does not match the tip");
}

console.log(`Wrote ${[...written].length}-character tip to /output/entry.txt`);
