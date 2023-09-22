// var text = document.getElementById("textField").value;

// var file = new File("myFile.txt", "w");

// file.write(text);

// var div = document.createElement("div");
// div.innerHTML = text;
// document.body.appendChild(div);

const fs = require("fs");

let submitPost = document.getElementById("submitPost");
let data = "Learning how to write in a file.";

fs.writeFile("myFile.txt", data, (err) => {
  if (err) throw err;
});

fs.readFile("myFile.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});
