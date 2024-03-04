import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.sendStatus(403);

    const user = await User.findOne({
      where: {
        refreshToken,
      },
    });

    if (!user) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.refreshToken, (error, decoded) => {
      if (error) return res.sendStatus(403);

      const aksesToken = jwt.sign(
        {
          id: user.id,
          nama: user.nama,
          namaLengkap: user.namaLengkap,
          email: user.email,
          alamat: user.alamat,
          urlFoto: user.urlFoto,
        },
        process.env.aksesToken,
        { expiresIn: "20s" }
      );

      res.json({ login: true, aksesToken });
    });
  } catch (error) {
    console.log(error);
  }
};
