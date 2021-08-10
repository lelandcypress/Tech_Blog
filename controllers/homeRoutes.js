const router = require("express").Router();
const { Article, Comment, User } = require("../models");
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const articleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const articles = articleData.map((article) => article.get({ plain: true }));
    // Pass serialized data and session flag into template
    console.log(articles);
    res.render("homepage", {
      articles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
