const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#article-name").value.trim();
  const content = document.querySelector("#article-content").value.trim();

  if (name && content) {
    const response = await fetch(`/api/articles`, {
      method: "POST",
      body: JSON.stringify({ name, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/articles/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete article");
    }
  }
};

document
  .querySelector(".new-article-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".article-list")
  .addEventListener("click", delButtonHandler);
