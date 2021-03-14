// deno run https://raw.githubusercontent.com/SuperManfred/denoProjects/main/serve_hello_world.ts

import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 8000 });
console.log("view the file server output in your browser: http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "HTTP server: 'Hello World' :)" });
}