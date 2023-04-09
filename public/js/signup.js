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
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
