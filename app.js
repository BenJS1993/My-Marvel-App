console.log(process.argv[2]);

const command = process.argv[2];

const yargs = require("yargs");

if (command === "add") {
  console.log("adding note...");
} else if (command === "remove") {
  console.log("removing note...");
} else if (command === "read") {
  console.log("reading note...");
} else if (command === "list") {
  console.log("listing note...");
} else {
  console.log("unknown command");
}

console.log(process.argv);

console.log(yargs.argv);
