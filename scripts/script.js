const loginForm = document.querySelector("#user-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const API_BASE_URL = "http://api.noroff.dev/api/v1";
const API_LOGIN_URL = `${API_BASE_URL}/social/auth/login`;

const apiUrl = "";

async function doFetch(url, customOptions = {}) {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      ...customOptions,
    };
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const userData = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  console.log(userData)

  const options = {
    method: 'POST',
    body: JSON.stringify{userData},
  };

  const data = await doFetch(API_LOGIN_URL, userData);
  console.log(data);
}

loginForm.addEventListener("submit", handleSubmit);