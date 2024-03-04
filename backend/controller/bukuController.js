import Buku from "../models/bukuModel.js";
import Favorite from "../models/favoriteModel.js";
import path from "path";

export const tambahBuku = async (req, res) => {
  try {
    if (req.files == null) {
      await Buku.create({
        cover: "unknown.png",
        urlCover: `${req.protocol}://${req.get("host")}/buku/unknown.png`,
        judul: req.body.judul,
        kategori: req.body.kategori,
        deskripsi: req.body.deskripsi,
        jumlahHalaman: req.body.jumlahHalaman,
        tanggalTerbit: req.body.tanggalTerbit,
        bahasa: req.body.bahasa,
        penerbit: req.body.penerbit,
        penulis: req.body.penulis,
        panjang: req.body.panjang,
        lebar: req.body.lebar,
      });
    } else {
      const file = req.files.file;
      const ext = path.extname(file.name);
      const fileName = file.md5 + ext;
      const urlCover = `${req.protocol}://${req.get("host")}/buku/${fileName}`;
      const allowedType = [".png", ".jpg", ".jpeg", ".webp", ".avif"];

      if (!allowedType.includes(ext.toLocaleLowerCase()))
        return res.status(422).json({ msg: "format gambar salah" });

      file.mv(`./public/buku/${fileName}`, async (error) => {
        if (error) return res.status(500).json({ msg: error.message });
        try {
          await Buku.create({
            cover: fileName,
            urlCover: urlCover,
            judul: req.body.judul,
            kategori: req.body.kategori,
            deskripsi: req.body.deskripsi,
            jumlahHalaman: req.body.jumlahHalaman,
            tanggalTerbit: req.body.tanggalTerbit,
            bahasa: req.body.bahasa,
            penerbit: req.body.penerbit,
            penulis: req.body.penulis,
            panjang: req.body.panjang,
            lebar: req.body.lebar,
          });
        } catch (error) {
          console.log(error.message);
        }
      });

      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};

export const editBuku = async (req, res) => {
  try {
    if (req.files == null) {
      await Buku.update(
        {
          cover: fileName,
          urlCover: `${req.protocol}://${req.get("host")}/buku/unknown.png`,
          judul: req.body.judul,
          kategori: req.body.kategori,
          deskripsi: req.body.deskripsi,
          jumlahHalaman: req.body.jumlahHalaman,
          tanggalTerbit: req.body.tanggalTerbit,
          bahasa: req.body.bahasa,
          penerbit: req.body.penerbit,
          penulis: req.body.penulis,
          panjang: req.body.panjang,
          lebar: req.body.lebar,
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
      const urlCover = `${req.protocol}://${req.get("host")}/buku/${fileName}`;
      const allowedType = [".png", ".jpg", ".jpeg", ".webp", ".avif"];

      if (!allowedType.includes(ext.toLocaleLowerCase()))
        return res.status(422).json({ msg: "format gambar salah" });

      file.mv(`./public/buku/${fileName}`, async (error) => {
        if (error) return res.status(500).json({ msg: error.message });
        try {
          await Buku.update(
            {
              cover: fileName,
              urlCover: urlCover,
              judul: req.body.judul,
              kategori: req.body.kategori,
              deskripsi: req.body.deskripsi,
              jumlahHalaman: req.body.jumlahHalaman,
              tanggalTerbit: req.body.tanggalTerbit,
              bahasa: req.body.bahasa,
              penerbit: req.body.penerbit,
              penulis: req.body.penulis,
              panjang: req.body.panjang,
              lebar: req.body.lebar,
            },
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

      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};

export const tampilkanBuku = async (req, res) => {
  try {
    const response = await Buku.findAll();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
