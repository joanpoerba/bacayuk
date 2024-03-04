import db from "../config/database.js";
import Peminjaman from "../models/peminjamanModel.js";

export const tampilkanPeminjaman = async (req, res) => {
  try {
    const response = await db.query(
      `SELECT peminjamans.id, peminjamans.userId, peminjamans.bukuId, peminjamans.tanggalPeminjaman, peminjamans.tanggalPengembalian, users.nama, bukus.judul FROM peminjamans INNER JOIN users ON users.id = peminjamans.userId INNER JOIN bukus ON bukus.id = peminjamans.bukuId`
    );

    res.json(response[0]);
  } catch (error) {
    console.log(error);
  }
};

export const tampilkanPeminjamanByUserId = async (req, res) => {
  try {
    const response = await db.query(
      `SELECT peminjamans.id, peminjamans.userId, peminjamans.bukuId, peminjamans.tanggalPeminjaman, peminjamans.tanggalPengembalian, users.nama, bukus.judul FROM peminjamans INNER JOIN users ON users.id = peminjamans.userId INNER JOIN bukus ON bukus.id = peminjamans.bukuId WHERE userId = ${req.query.userId} AND bukuId = ${req.query.bukuId}`
    );

    if (response) return res.json(response[0]);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

export const pinjam = async (req, res) => {
  try {
    const tanggalPeminjaman = new Date().getTime();

    const tanggalPengembalian = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ).getTime();

    await db.query(
      `INSERT INTO peminjamans(userId, bukuId, tanggalPeminjaman, tanggalpengembalian) VALUES(${req.params.userid}, ${req.params.bukuid}, ${tanggalPeminjaman}, 
    ${tanggalPengembalian})`
    );

    console.log(new Date().getTime());

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const kembalikan = async (req, res) => {
  try {
    await Peminjaman.destroy({
      where: {
        userId: req.query.userid,
        bukuId: req.query.bukuid,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
