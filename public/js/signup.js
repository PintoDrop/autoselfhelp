const signupFormHandler = async function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  console.log(email, password);
  console.log("hello");
  if (email && password) {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Please enter valid email");
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
