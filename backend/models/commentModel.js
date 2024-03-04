import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js";

const DataTypes = Sequelize;

const Comment = db.define("comment", {
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
  comment: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.STRING,
  },
});

// Comment.hasOne(User, { onDelete: "CASCADE" });

export default Comment;

(async () => {
  await db.sync({ alter: true });
})();
