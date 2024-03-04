import User from "../models/userModel.js";
import Buku from "../models/bukuModel.js";
import Favorite from "../models/favoriteModel.js";
import Petugas from "../models/petugasModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import path from "path";
import db from "../config/database.js";

export const daftar = async (req, res) => {
  try {
    const salt = 10;
    const password = req.body.password;

    const nama = await User.findOne({
      where: {
        email: req.body.nama,
      },
    });

    const email = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!validator.isEmail(req.body.email)) {
      res.json({ register: false, msg: "format email salah" });
    }

    if (email != null)
      return res.json({ register: false, msg: "email sudah dipakai" });

    if (nama != null)
      return res.json({ register: false, msg: "nama sudah dipakai" });

    if (email == null && nama == null) {
      bcrypt.hash(password.toString(), salt, (error, hash) => {
        User.create({
          nama: req.body.nama,
          email: req.body.email,
          password: hash,
        });

        if (!error) {
          res.status(201).json({ register: true });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const masuk = async (req, res) => {
  try {
    const nama = await User.findOne({
      where: {
        nama: req.body.nama,
      },
    });

    const email = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (nama == null) {
      try {
        const petugas = await Petugas.findOne({
          where: {
            nama: req.body.nama,
          },
        });

        if (
          req.body.nama == petugas.nama &&
          req.body.email == petugas.email &&
          req.body.password == petugas.password
        ) {
          return res
            .cookie(`role=${petugas.role}`, true, {
              maxAge: 24 * 60 * 60 * 1000,
            })
            .json({ loginToAdmin: true });
        }
        if (!nama.nama)
          if (!validator.isEmail(req.body.email))
            return res.json({ login: false, msg: "format email salah" });
      } catch (error) {
        console.log(error);
      }
    }

    if (!validator.isEmail(req.body.email))
      return res.json({ login: false, msg: "format email salah" });

    if (email == null && nama.email != req.body.email)
      return res.json({ login: false, msg: "email tidak ditemukan" });

    const match = await bcrypt.compare(req.body.password, nama.password);

    if (!match) return res.json({ login: false, msg: "password salah" });

    const aksesToken = jwt.sign(
      {
        id: nama.id,
        nama: nama.nama,
        namaLengkap: nama.namaLengkap,
        email: nama.email,
        alamat: nama.alamat,
        urlFoto: nama.urlFoto,
      },
      process.env.aksesToken,
      {
        expiresIn: "20s",
      }
    );

    const refreshToken = jwt.sign(
      {
        id: nama.id,
        nama: nama.nama,
        email: nama.email,
      },
      process.env.refreshToken,
      {
        expiresIn: "1d",
      }
    );

    await User.update(
      { refreshToken },
      {
        where: {
          id: nama.id,
          nama: nama.nama,
          email: nama.email,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ login: true, aksesToken });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.sendStatus(204);

  const user = await User.findOne({
    where: {
      refreshToken,
    },
  });

  if (!user) return res.sendStatus(204);

  const userId = user.id;
  await User.update(
    { refreshToken: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export const editUserById = async (req, res) => {
  try {
    const id = await User.findOne({
      where: {
        id: req.body.id,
      },
    });

    if (req.files == null) {
      await User.update(
        {
          foto: "unknown.png",
          urlFoto: `${req.protocol}://${req.get("host")}/upload/unknown.png`,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
    } else {
      const file = req.files.file;
      const ext = path.extname(file.name);
      const fileName = file.md5 + ext;
      const urlFoto = `${req.protocol}://${req.get("host")}/upload/${fileName}`;
      const allowedType = [".png", ".jpg", ".jpeg", ".webp", ".avif"];

      if (!allowedType.includes(ext.toLocaleLowerCase()))
        return res.status(422).json({ msg: "format gambar salah" });

      file.mv(`./public/upload/${fileName}`, async (error) => {
        if (error) return res.status(500).json({ msg: error.message });
        try {
          await User.update(
            { foto: fileName, urlFoto: urlFoto },
            {
              where: {
                id: req.body.id,
              },
            }
          );
        } catch (error) {
          console.log(error.message);
        }
      });
    }

    await User.update(
      {
        namaLengkap: req.body.namaLengkap,
        alamat: req.body.alamat,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    const aksesToken = jwt.sign(
      {
        id: id.id,
        nama: id.nama,
        namaLengkap: id.namaLengkap,
        email: id.email,
        alamat: id.alamat,
        urlFoto: id.urlFoto,
      },
      process.env.aksesToken,
      {
        expiresIn: "20s",
      }
    );

    const refreshToken = jwt.sign(
      {
        id: id.id,
        nama: id.nama,
        email: id.email,
      },
      process.env.refreshToken,
      {
        expiresIn: "1d",
      }
    );

    await User.update(
      { refreshToken },
      {
        where: {
          id: id.id,
          nama: id.nama,
          email: id.email,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ msg: "user edited", aksesToken });
  } catch (error) {
    console.log(error.message);
  }
};

export const detailBukuById = async (req, res) => {
  try {
    const buku = await Buku.findOne({
      where: {
        id: req.query.id,
      },
    });

    res.json(buku);
  } catch (error) {
    console.log(error);
  }
};

export const favoriteTotal = async (req, res) => {
  try {
    const totalFavorite = await Favorite.findAndCountAll({
      where: {
        userId: req.query.userId,
      },
    });

    res.json(totalFavorite.count);
  } catch (error) {
    console.log(error);
  }
};

export const verifyFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findOne({
      where: {
        userId: req.query.userId,
        bukuId: req.query.bukuId,
      },
    });

    if (favorite !== null) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.log(error);
  }
};

export const tampilkanFavorite = async (req, res) => {
  try {
    const favorite = await db.query(
      `SELECT bukus.*, favorites.* FROM bukus INNER JOIN favorites ON bukus.id = favorites.bukuId WHERE favorites.userId = ${req.query.id}`
    );

    res.json(favorite);
  } catch (error) {
    console.log(error);
  }
};

export const tambahFavorite = async (req, res) => {
  try {
    const validate = await Favorite.findOne({
      where: {
        userId: req.body.userId,
        bukuId: req.body.bukuId,
      },
    });

    if (validate) {
      await Favorite.destroy({
        where: {
          userId: req.body.userId,
          bukuId: req.body.bukuId,
        },
      });

      res.json(false);
    } else {
      await Favorite.create({
        userId: req.body.userId,
        bukuId: req.body.bukuId,
      });

      res.json(true);
    }
  } catch (error) {
    console.log(error);
  }
};
