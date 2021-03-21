// deno run --allow-net https://raw.githubusercontent.com/SuperManfred/denoProjects/main/serve.ts

import { serve } from "https://deno.land/std/http/server.ts";
import { message } from "https://raw.githubusercontent.com/SuperManfred/denoProjects/main/helloworld.ts";
const server = serve({ port: 8000 });
const m = message;
console.log(
  "view the output in the browser: http://localhost:8000/ ",
);
for await (const req of server) {
  req.respond({ body: "HTTP serve message: " + m });
}
