// 1. Get the form ✔
// 2. Get the values from the form ✔
// 3. Shape the data to match the API ✔
// 4. Submit the data / Call the submit function

import { doFetch } from "./doFetch.mjs";

const API_BASE_URL = "https://api.noroff.dev/api/v1";
const API_REGISTER_URL = `${API_BASE_URL}/social/auth/register`;

const form = document.getElementById("user-login-form");

async function handleUserLogin(userDetails) {
  const result = await doFetch(API_REGISTER_URL, {
    method: "POST",
    body: userDetails,
  });
  console.log({ result });
}

function onLoginFormSubmit(event) {
  event.preventDefault();
  const usernameValue = document.getElementById("username").value;
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  event.preventDefault();

  const user = {
    usernameValue,
    emailValue,
    passwordValue,
  };

  handleUserLogin(user);
}

form.addEventListener("submit", onLoginFormSubmit);
