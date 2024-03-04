import { Sequelize } from "sequelize";
import db from "../config/database.js";

const DataTypes = Sequelize;

const Favorite = db.define("favorite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: {
        tableName: "users",
      },
      key: "id",
    },
  },
  bukuId: {
    type: DataTypes.INTEGER,
    references: {
      model: {
        tableName: "bukus",
      },
      key: "id",
    },
  },
});

export default Favorite;

(async () => {
  await db.sync();
})();
