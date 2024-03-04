import Petugas from "../models/petugasModel.js";

export const tambahPetugas = async (req, res) => {
  try {
    await Petugas.create({
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const tampilkanPetugas = async (req, res) => {
  try {
    const response = await Petugas.findAll({
      where: {
        role: "petugas",
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const hapusPetugas = async (req, res) => {
  try {
    await Petugas.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
