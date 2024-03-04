import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.aksesToken, (error, decoded) => {
    if (error) return res.sendStatus(403);
    req.id = decoded.id;
    next();
  });
};
