const router = require("express").Router();
const { Article, Comment, User } = require("../models");
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const articleData = await Article.findAll({
      attributes: ["title", "content"],
      include: [{ model: User }],
    });
    const articles = articleData.map((article) => article.get({ plain: true }));
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
