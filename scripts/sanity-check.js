const fs = require('fs');
const path = require('path');

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    process.env[key] = value;
  }
}

async function main() {
  loadEnvLocal();

  const { createClient } = require('@sanity/client');
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false,
  });

  const singleton = await client.fetch(
    '*[_type=="siteContent" && _id=="siteContent"][0]{_id,hero{portraitCaptionBody}}',
  );
  const first = await client.fetch('*[_type=="siteContent"][0]{_id,hero{portraitCaptionBody}}');

  console.log(JSON.stringify({ singleton, first }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

