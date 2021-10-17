console.log("Executing the command");
const fs =require('fs');
const yargs =require('yargs');
const ter =require('./terminal.js');
var title=yargs.argv.title;
var body = yargs.argv.body;
var cmd = yargs.argv._[0];

if (cmd === "add") {
  console.log("adding note");
  ter.a_n(title, body);
} else if (cmd === "remove") {
  console.log("removing note");
  ter.rem_n(title);
} else if (cmd === "read") {
  console.log("reading note");
  ter.read_n(title);
} else if (cmd === "list") {
  console.log("listing all notes");
  ter.list();
} else {
  console.log("Error in cmd");
}