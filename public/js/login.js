const loginFormHandler = async function (event) {
  console.log("hi herehere");
  event.preventDefault();
  const emailEL = document.querySelector("#formGroupExampleInput");
  const passwordEl = document.querySelector("#formGroupExampleInput2");
  fetch("/api/user/login", {
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
