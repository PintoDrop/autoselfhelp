var generator = require("generate");
// import generator from "generate-password";
var showPassEl = document.querySelector("#random-password");
// const generatePassword = require('generate-password');


const signupFormHandler = async function (event) {
  event.preventDefault();

  const nameEl = document.querySelector("#name");
  const emailEl = document.querySelector("#newEmail");
  const passwordEl = document.querySelector("#newPassword");

  const response = await fetch("/api/user/", {
    method: "POST",
    body: JSON.stringify({
      name: nameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

function genPass() {
  var password = generator.generate({
    length: 16,
    numbers: true,
  });
  console.log(password);

  showPassEl.textContent = password;
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);

document.querySelector("#generate").addEventListener("click", genPass);
