const { Article } = require("../models");

const articleData = [
  {
    title: "Express is Great",
    content:
      "Node and Express are the bomb diggity to quote a great man. Couple that with Handlebars and you have a knee slappingly good time.",
    user_id: 1,
  },
  {
    title: "It's See-Kwal! Not S-Q-L!",
    content:
      "Nobody can convince me that my best friend, Structured Query Language, must be reduced to the indignity of an acronym instead of its awesome name.",
    user_id: 2,
  },
];

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;
