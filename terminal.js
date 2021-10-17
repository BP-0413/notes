const fs = require('fs');
var a = () => {
  try {
    return JSON.parse(fs.readFileSync('notes_node.txt'));
  } catch (err) {
    return [];
  }
}
var a_n = (title, body) => {
  var n = a();

  var note = {
    title,
    body
  };
var twice = n.filter((note) => note.title === title);
if (twice.length === 0) {
    n.push(note);

    fs.writeFileSync("notes_node.txt", JSON.stringify(n));

    logNote(note);
  } else {
    console.log("STOP: Title already exists.");
  }
}
var rem_n = (title) => {
  var n = a();

  var p_n = n.filter((note) => note.title !== title);

  fs.writeFileSync("notes_node.txt", JSON.stringify(p_n));
}
var read_n = (title) => {
  var n = a();

  var r_n = n.filter((note) => note.title === title);

  logNote(r_n[0]);
}
var list = () => {
  var n = a();

  n.forEach((note) => logNote(note));
}
var logNote = (note) => {
  console.log("===================================");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}
module.exports = {
  a_n,
  rem_n,
  read_n,
  list
}