// var text = document.getElementById("textField").value;

// var file = new File("myFile.txt", "w");

// file.write(text);

// var div = document.createElement("div");
// div.innerHTML = text;
// document.body.appendChild(div);

var file = new File("myFile.txt");
var reader = new FileReader();
reader.onload = function () {
  var text = reader.result;
  console.log(text);
};
reader.readAsText(file);
