import express from "express";
import {
  daftar,
  masuk,
  editUserById,
  logout,
  detailBukuById,
  tambahFavorite,
  tampilkanFavorite,
  verifyFavorite,
  favoriteTotal,
} from "../controller/userController.js";
import {
  getUser,
  getUserByNama,
  deleteUser,
  totalUsers,
  totalBuku,
  getBukuByJudul,
  logoutAdmin,
  unduhLaporan,
  deleteBuku,
  totalPetugas,
  getBukuById,
} from "../controller/adminController.js";
import {
  editBuku,
  tambahBuku,
  tampilkanBuku,
} from "../controller/bukuController.js";
import { refreshToken } from "../controller/refreshToken.js";
import {
  getCommentById,
  hapusComment,
  tambahComment,
} from "../controller/commentController.js";
import {
  hapusPetugas,
  tambahPetugas,
  tampilkanPetugas,
} from "../controller/petugasController.js";
import { kembalikan, pinjam, tampilkanPeminjaman, tampilkanPeminjamanByUserId } from "../controller/peminjamanController.js";

const router = express.Router();

router.get("/admin/totalusers", totalUsers);
router.get("/admin/totalpetugas", totalPetugas);
router.get("/admin/totalbuku", totalBuku);
router.get("/admin/getuser", getUser);
router.post("/admin/getuserbynama", getUserByNama);
router.get("/admin/getbukubyid", getBukuById);
router.post("/admin/getbukubyjudul", getBukuByJudul);
router.delete("/admin/delete/id=:id", deleteUser);
router.delete("/admin/logout", logoutAdmin);
router.get("/unduhlaporan", unduhLaporan);
router.delete("/admin/hapusbuku/id=:id", deleteBuku);

router.post("/daftar", daftar);
router.post("/masuk", masuk);
router.delete("/logout", logout);
router.patch("/user/edit", editUserById);
router.get("/token", refreshToken);
router.get("/detail", detailBukuById);
router.post("/comment", tambahComment);
router.get("/getcomment", getCommentById);
router.delete("/hapuskomen/:id", hapusComment);
router.get("/favoritetotal", favoriteTotal);
router.get("/verifyfavorite", verifyFavorite);
router.post("/tambahfavorite", tambahFavorite);
router.get("/favorite", tampilkanFavorite);

router.get("/tampilkanbuku", tampilkanBuku);
router.post("/tambahbuku", tambahBuku);
router.post("/editbuku", editBuku);

router.post("/admin/tambahpetugas", tambahPetugas);
router.get("/admin/petugas", tampilkanPetugas);
router.delete("/admin/hapuspetugas/:id", hapusPetugas);

router.get('/peminjaman', tampilkanPeminjaman)
router.get('/peminjamanbyid', tampilkanPeminjamanByUserId)
router.get("/pinjam/:userid/:bukuid", pinjam);
router.get('/kembalikan', kembalikan)

export default router;
