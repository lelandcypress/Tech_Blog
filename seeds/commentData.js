const { Comment } = require("../models");

const commentData = [
  {
    content: "You are absolutely correct",
    user_id: 2,
    article_id: 1,
  },
  {
    content:
      "Ummm...excuse me!!! it's actually ESS-Que-Elll and I don't appreciate the negative attitude!",
    user_id: 1,
    article_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
