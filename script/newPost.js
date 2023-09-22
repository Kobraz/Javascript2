// const fs = require("fs");

// let submitPost = document.getElementById("submitPost");
// let data = "Learning how to write in a file.";

// fs.writeFile("myFile.txt", data, (err) => {
//   if (err) throw err;
// });

// fs.readFile("myFile.txt", (err, data) => {
//   if (err) throw err;

//   console.log(data.toString());
// });

let require;
const fs = require("fs");

fs.readFile("myFile.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
