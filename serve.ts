// deno run --allow-net https://raw.githubusercontent.com/SuperManfred/denoProjects/main/serve.ts

import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 8000 });
console.log(
  "view the file server output in your browser: http://localhost:8000/",
);
for await (const req of server) {
  req.respond({ body: "HTTP server: 'Hello World' :)" });
}
