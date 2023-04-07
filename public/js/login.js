const loginFormHandler = async function(event) {
  console.log("hi herehere");
  event.preventDefault();
  const emailEL = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: emailEL.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(() => {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
