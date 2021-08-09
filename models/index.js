const User = require("./User");
const Article = require("./Article");
const Comment = require("./Comment");

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Article.hasMany(Comment, {
  foreignKey: "article_id",
});

User.hasMany(Article, {
  foreignKey: "user_id",
});

module.exports = { User, Article, Comment };
