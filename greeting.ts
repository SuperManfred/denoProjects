//  :( cant make it work right now
// // deno run https://raw.githubusercontent.com/SuperManfred/denoProjects/main/greeting.ts

// import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";

// const ask = new Ask({
//   prefix: "",
//   suffix: "?",
// });

// const answers = await ask.prompt([
//   {
//     name: "Name",
//     type: "input",
//     message: "Your Name",
//   },
// ]);

// function capitalize(word: string | number | boolean | undefined) {
//   if (typeof answers === "number") {
//     return answers;
//   } else if (typeof answers === "boolean") {
//     return answers;
//   } else if (typeof answers === "undefined") {
//     return answers;
//   } else {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }
// }

// // function hello(name: string): string {
// //   return "Hello " + capitalize(name);
// // }

// console.log(capitalize(answers));
