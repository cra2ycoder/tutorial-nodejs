const readline = require("readline");

const CLI = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

CLI.question("Whats is your Name?", (name) => {
  console.log({ name });
  CLI.close();
});
