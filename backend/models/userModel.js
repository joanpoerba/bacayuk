import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Comment from "./commentModel.js";
import Favorite from "./favoriteModel.js";
import Peminjaman from "./peminjamanModel.js";

const DataTypes = Sequelize;

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  namaLengkap: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    unique: {
      msg: "Email sudah dipakai",
    },
  },
  alamat: {
    type: DataTypes.TEXT,
    defaultValue: "-",
  },
  foto: {
    type: DataTypes.STRING,
    defaultValue: "unknown.png",
  },
  urlFoto: {
    type: DataTypes.STRING,
    defaultValue: "http://localhost:3000/upload/unknown.png",
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  refreshToken: {
    type: DataTypes.STRING,
  },
});

User.hasOne(Comment, { onDelete: "CASCADE" });
User.hasOne(Favorite, { onDelete: "CASCADE" });
User.hasOne(Peminjaman, { onDelete: "CASCADE" });

export default User;

(async () => {
  await db.sync();
})();
