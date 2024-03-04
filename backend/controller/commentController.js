import db from "../config/database.js";
import Comment from "../models/commentModel.js";

export const tambahComment = async (req, res) => {
  try {
    await Comment.create({
      comment: req.body.comment,
      rating: req.body.rating,
      userId: req.body.userId,
      bukuId: req.body.bukuId,
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const getCommentById = async (req, res) => {
  try {
    const response = await db.query(
      `SELECT comments.*, users.nama, users.urlFoto FROM comments INNER JOIN users ON users.id = comments.userId WHERE bukuId = ${req.query.id} ORDER BY comments.comment DESC`
    );
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const hapusComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
