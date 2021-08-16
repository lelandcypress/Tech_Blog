const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#article-title").value.trim();
  const content = document.querySelector("#article-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/article`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create article");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/article/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete article");
    }
  }
};

const delCommentHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete comment");
    }
  }
};

const editArticleHandler = async (event) => {
  const title = document.querySelector("#editArtTitle").value.trim();
  const content = document.querySelector("#editArtCont").value.trim();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    console.log("ID:" + id);

    await fetch(`/article/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

// Article modal
const modal = document.getElementById("articleModal");

// Get the button that opens the modal
const btn = document.getElementById("articleEdit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function (event) {
  event.stopPropagation();
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document
  .querySelector(".new-article-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector("#articleDelete")
  .addEventListener("click", delButtonHandler);

document
  .querySelector("#commentDelete")
  .addEventListener("click", delCommentHandler);

document
  .querySelector("#articlePost")
  .addEventListener("click", editArticleHandler);
