import User from "../models/userModel.js";
import Buku from "../models/bukuModel.js";
import Petugas from "../models/petugasModel.js";
import { Op } from "sequelize";
import exceljs from "exceljs";

export const totalUsers = async (req, res) => {
  try {
    const total = await User.findAndCountAll();
    res.json(total.count);
  } catch (error) {
    console.log(error);
  }
};

export const totalPetugas = async (req, res) => {
  try {
    const total = await Petugas.findAndCountAll({
      where: {
        role: "petugas",
      },
    });
    res.json(total.count);
  } catch (error) {
    console.log(error);
  }
};

export const totalBuku = async (req, res) => {
  try {
    const total = await Buku.findAndCountAll();
    res.json(total.count);
  } catch (error) {
    console.log(error);
  }
};

export const getUserByNama = async (req, res) => {
  try {
    const nama = await User.findAll({
      where: {
        nama: { [Op.like]: "%" + req.body.nama + "%" },
      },
    });
    res.status(200).json(nama);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBukuById = async (req, res) => {
  try {
    const buku = await Buku.findAll({
      where: {
        id: req.query.id,
      },
    });
    res.status(200).json(buku);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBukuByJudul = async (req, res) => {
  try {
    const buku = await Buku.findAll({
      where: {
        judul: { [Op.like]: "%" + req.body.judul + "%" },
      },
    });
    res.status(200).json(buku);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "user deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBuku = async (req, res) => {
  try {
    await Buku.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("role");

  return res.sendStatus(200);
};

export const unduhLaporan = async (req, res) => {
  try {
    const workbook = new exceljs.Workbook();
    const worksheetUser = workbook.addWorksheet("Data user Bacayuk");
    const worksheetBuku = workbook.addWorksheet("Data buku Bacayuk");
    const worksheetPetugas = workbook.addWorksheet("Data petugas Bacayuk");

    const dataUser = await User.findAll({
      attributes: [
        "id",
        "nama",
        "namaLengkap",
        "email",
        "alamat",
        "urlFoto",
      ],
    });

    const dataBuku = await Buku.findAll({
      attributes: [
        "id",
        "judul",
        "penulis",
        "tanggalTerbit",
        "kategori",
        "urlCover",
      ],
    });

    const dataPetugas = await Petugas.findAll();

    const headerDataUser = [
      {
        header: "id",
        key: "id",
        width: 5,
      },
      {
        header: "nama",
        key: "nama",
        width: 20,
      },
      {
        header: "namaLengkap",
        key: "namaLengkap",
        width: 20,
      },
      {
        header: "role",
        key: "role",
        width: 10,
      },
      {
        header: "email",
        key: "email",
        width: 20,
      },
      {
        header: "alamat",
        key: "alamat",
        width: 20,
      },
      {
        header: "urlFoto",
        key: "urlFoto",
        width: 100,
      },
    ];

    const headerDataBuku = [
      {
        header: "id",
        key: "id",
        width: 5,
      },
      {
        header: "judul",
        key: "judul",
        width: 100,
      },
      {
        header: "penulis",
        key: "penulis",
        width: 50,
      },
      {
        header: "tanggalTerbit",
        key: "tanggalTerbit",
        width: 20,
      },
      {
        header: "kategori",
        key: "kategori",
        width: 20,
      },
      {
        header: "urlCover",
        key: "urlCover",
        width: 100,
      },
    ];

    const headerDataPetugas = [
      {
        header: "id",
        key: "id",
        width: 5,
      },
      {
        header: "nama",
        key: "nama",
        width: 70,
      },
      {
        header: "role",
        key: "role",
        width: 40,
      },
      {
        header: "email",
        key: "email",
        width: 50,
      },
      {
        header: "password",
        key: "password",
        width: 20,
      },
    ];

    worksheetUser.columns = headerDataUser;
    worksheetBuku.columns = headerDataBuku;
    worksheetPetugas.columns = headerDataPetugas;

    dataUser.forEach((data) => {
      worksheetUser.addRow(data);
    });

    dataBuku.forEach((data) => {
      worksheetBuku.addRow(data);
    });

    dataPetugas.forEach((data) => {
      worksheetPetugas.addRow(data);
    });

    worksheetUser.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    worksheetBuku.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    worksheetPetugas.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    return workbook.xlsx.write(res).then(() => {
      res.status(200).end();
    });
  } catch (error) {
    console.log(error);
  }
};
