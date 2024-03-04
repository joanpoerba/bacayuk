import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Comment from "./commentModel.js";
import Favorite from "./favoriteModel.js";
import Peminjaman from "./peminjamanModel.js";

const DataTypes = Sequelize;

const Buku = db.define("buku", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cover: {
    type: DataTypes.STRING,
  },
  urlCover: {
    type: DataTypes.STRING,
  },
  judul: {
    type: DataTypes.TEXT,
  },
  kategori: {
    type: DataTypes.STRING,
  },
  deskripsi: {
    type: DataTypes.TEXT,
    defaultValue: "-",
  },
  jumlahHalaman: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  tanggalTerbit: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  bahasa: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  penerbit: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  penulis: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  panjang: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
  lebar: {
    type: DataTypes.STRING,
    defaultValue: "-",
  },
});

Buku.hasOne(Comment, { onDelete: "CASCADE" });
Buku.hasOne(Favorite, { onDelete: "CASCADE" });
Buku.hasOne(Peminjaman, { onDelete: "CASCADE" });

export default Buku;

(async () => {
  await db.sync();
})();
