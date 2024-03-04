import { Sequelize } from "sequelize";
import db from "../config/database.js";

const DataTypes = Sequelize;

const Petugas = db.define("petugas", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: DataTypes.STRING,
  role: {
    type: DataTypes.STRING,
    defaultValue: "petugas",
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default Petugas;

(async () => {
  await db.sync();
})();
