let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let message = document.getElementById("message");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disabled");
  signinBtn.classList.remove("disabled");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signinBtn.classList.add("disabled");
  signupBtn.classList.remove("disabled");
};

//---LoginCheck - Check if email and password from Login-form matches array---

const loginForm = document.getElementById("loginForm");
const users = [
  { email: "u1@gmail.com", password: "pass1" },
  { email: "u2@gmail.com", password: "pass2" },
  { email: "u3@gmail.com", password: "pass3" },
];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    message.innerHTML = "Login successful!";
    console.log("Login successfull");
  } else {
    message.innerHTML = "Invalid username or password.";
    console.log("Invalid username or password");
  }
});
