const newCommentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#new-comment").value.trim();

  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
