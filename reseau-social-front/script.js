document.addEventListener("DOMContentLoaded", () => {
  const fab = document.querySelector(".fab");

  fab.addEventListener("click", () => {
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
      <h2>@nouveau</h2>
      <p>Tu viens d'ajouter un nouveau post ! 🎉</p>
    `;

    const main = document.querySelector("main");
    main.insertBefore(newPost, main.firstChild);

    fab.classList.add("clicked");
    setTimeout(() => {
      fab.classList.remove("clicked");
    }, 300);
  });
});
