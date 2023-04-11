const generatePwHandler = async function (event) {
  console.log("hi");
  event.preventDefault();
  const passwordEl = document.querySelector("#random-password");

  fetch("/api/user/generate", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      passwordEl.innerHTML = data;
      console.log(data);
    });
};

document
  .querySelector("#generate-btn")
  .addEventListener("click", generatePwHandler);

// document.querySelector("#generate").addEventListener("click", genPass);
