var text = document.getElementById("textField").value;

var file = new File("myFile.txt", "w");

file.write(text);

var div = document.createElement("div");
div.innerHTML = text;
document.body.appendChild(div);
