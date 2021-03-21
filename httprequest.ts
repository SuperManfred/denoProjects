// deno run --allow-net=example.com httprequest.ts https://example.com
// you must pass allow net permissions for host, then this mod, then the full url

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
