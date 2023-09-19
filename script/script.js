let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let message = document.getElementById("message");
let lost = document.getElementById("lost");
var mode = "signUp";

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  mode = "signIn";
  console.log("SignIn-mode");
  signupBtn.classList.remove("enabled");
  signupBtn.classList.add("disabled");
  signinBtn.classList.remove("disabled");
  signinBtn.classList.add("enabled");
  console.log("signupBtn " + document.getElementById("signupBtn").className);
  console.log("signinBtn " + document.getElementById("signinBtn").className);
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  mode = "signUp";
  console.log("SignUp-mode");
  signinBtn.classList.remove("enabled");
  signinBtn.classList.add("disabled");
  signupBtn.classList.remove("disabled");
  signupBtn.classList.add("enabled");
  console.log("signupBtn " + document.getElementById("signupBtn").className);
  console.log("signinBtn " + document.getElementById("signinBtn").className);
};

//---LoginCheck - Check if email and password from Login-form matches array---

const loginForm = document.getElementById("loginForm");
const users = [
  { email: "u1@gmail.com", password: "pass1" },
  { email: "u2@gmail.com", password: "pass2" },
  { email: "u3@gmail.com", password: "pass3" },
];

if (mode === "signIn") {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      message.innerHTML = "Login successful!";
      console.log("Login successfull!");
      message.style.color = "green";
      message.style.backgroundColor = "black";
      lost.style.color = "#ddd";
      document.getElementById("lost").getElementsByTagName("a")[0].style.color =
        "#ddd";
    } else {
      message.innerHTML = "Invalid username or password.";
      console.log("Invalid username or password.");
      message.style.color = "red";
      message.style.backgroundColor = "black";
      lost.style.color = "#000";
      document.getElementById("lost").getElementsByTagName("a")[0].style.color =
        "#000";
    }
  });
} else if (mode === "signUp") {
  console.log("SignUp-mode running");
}
