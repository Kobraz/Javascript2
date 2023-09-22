// var text = document.getElementById("textField").value;

// var file = new File("myFile.txt", "w");

// file.write(text);

// var div = document.createElement("div");
// div.innerHTML = text;
// document.body.appendChild(div);

var text = document.getElementById("textField").value;
var blob = new Blob([text], { type: "text/plain" });
var a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "myFile.txt";
a.click();
