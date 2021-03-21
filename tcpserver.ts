// deno run --allow-net https://raw.githubusercontent.com/SuperManfred/denoProjects/main/tcpserver.ts

const hostname = "0.0.0.0";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(
  `Listening on ${hostname}:${port} \nin a new terminal enter this command~$ nc localhost 8080 \nthen write "echo :)"`,
);
for await (const conn of listener) {
  Deno.copy(conn, conn);
}
