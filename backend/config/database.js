import { Sequelize } from "sequelize";

const db = new Sequelize("bacayuk", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
