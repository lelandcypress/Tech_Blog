const { User } = require("../models");
const bcrypt = require("bcrypt");

const hashedPassword = bcrypt.hashSync(process.env.hash, 10);

const userData = [
  {
    name: "Mark Hammillton",
    email: "Test@gmail.com",
    password: hashedPassword,
  },
  {
    name: "Jones Earl James",
    email: "Tester@gmail.com",
    password: hashedPassword,
  },
  {
    name: "Washel Denzington",
    email: "Tested@gmail.com",
    password: hashedPassword,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
