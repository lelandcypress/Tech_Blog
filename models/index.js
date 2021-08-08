const User = require("./User");
const Article = require("./Article");
const Comment = require("./Comment");

Comment.hasOne(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Article, {
  foreignKey: "article_id",
});

Article.hasOne(User, {
  foreignKey: "user_id",
});

module.exports = { User, Article, Comment };
