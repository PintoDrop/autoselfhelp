const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  // event.preventDefault();

  const subjectEl = document.querySelector('input[name="post-subject"]').value;
  const descriptionEl = document.querySelector(
    'textarea[name="post-description"]').value;
 
  // const descriptionEl = document.querySelector('textarea[name="post-description"]').value;
  // const yearEl = document.querySelector('input[name="post-year"]').value;
  // const makeEl = document.querySelector('input[name="post-make"]').value;
  // const modelEl = document.querySelector('input[name="post-model"]').value;
    console.log(subjectEl, descriptionEl)
  await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      subject: subjectEl,
      description: descriptionEl
      // year: yearEl,
      // make: makeEl,
      // model: modelEl,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('click', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
