const newPostHandler = async function (event) {
  console.log("new post handler triggered");
  event.preventDefault();
  const subjectEl = document.querySelector('input[name="post-subject"]').value;
  const descriptionEl = document.querySelector(
    'input[name="post-description"]'
  ).value;
  const yearEl = document.querySelector('input[name="post-year"]').value;
  const makeEl = document.querySelector('input[name="post-make"]').value;
  const modelEl = document.querySelector('input[name="post-model"]').value;

  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      subject: subjectEl,
      description: descriptionEl,
      year: yearEl,
      make: makeEl,
      model: modelEl,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(() => {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostHandler);
