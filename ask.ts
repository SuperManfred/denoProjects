// $ deno run ~/ask.ts
import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";

const ask = new Ask({
    prefix: "",
    suffix: "?",
  }); 

const answers = await ask.prompt([
  {
    name: "Name",
    type: "input",
    message: "Full Name",
  },
  {
    name: "DOB",
    type: "number",
    message: "Date of Birth (ddmmyyyy)",
  },
]);


console.log(answers);
