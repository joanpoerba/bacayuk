import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./userModel.js";

const DataTypes = Sequelize;

const Peminjaman = db.define("peminjaman", {
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
  },
  tanggalPeminjaman: {
    type: DataTypes.STRING,
  },
  tanggalPengembalian: {
    type: DataTypes.STRING,
  },
});

// Peminjaman.hasOne(User, { onDelete: "CASCADE" });

export default Peminjaman;

(async () => {
  await db.sync();
})();
