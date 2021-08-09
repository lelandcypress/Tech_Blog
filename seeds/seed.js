const sequelize = require("../config/connection");
const seedArticle = require("./articleData");
const seedComments = require("./commentData");
const seedUsers = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedArticle();
  console.log("\n----- ARTICLES SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
