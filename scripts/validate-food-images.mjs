import { FOOD_IMAGE_URLS } from "../src/data/provinces/content/food-images.ts";

const UA = "MapaJugar/1.0 (educational)";

async function check(url) {
  const res = await fetch(url, {
    method: "GET",
    headers: { "user-agent": UA },
  });
  return res.status;
}

const bad = [];
for (const [name, url] of Object.entries(FOOD_IMAGE_URLS)) {
  const status = await check(url);
  if (status !== 200) bad.push({ name, url, status });
  console.log(status === 200 ? "OK " : "BAD", status, name);
}

if (bad.length) {
  console.log("\n--- BROKEN ---");
  for (const item of bad) console.log(item);
  process.exitCode = 1;
}
