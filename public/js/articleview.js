const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#new-comment").value.trim();
  const article_id = document.querySelector("#theId").value.trim();
  console.log(article_id);
  console.log(content);
  if (content) {
    await fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({ content, article_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
