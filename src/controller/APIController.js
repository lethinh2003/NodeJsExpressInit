import pool from "../configs/connectDB";
let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};
let getDetailUser = async (req, res) => {
  const getUserId = req.params.userId;
  const [row, fields] = await pool.execute(
    "SELECT * FROM `users` WHERE `id` = ?",
    [getUserId]
  );
  if (row.length === 0) {
    return res.status(400).json({
      message: "user invalid",
    });
  }
  return res.status(200).json({
    message: "ok",
    data: row,
  });
};
let createNewUser = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(400).json({
      message: "fill out!",
    });
  }
  await pool.execute(
    "INSERT INTO users (firstName, lastName, email, address) VALUES (?,?,?,?)",
    [firstName, lastName, email, address]
  );

  return res.status(200).json({
    message: "ok",
  });
};
let updateNewUser = async (req, res) => {
  const { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    "UPDATE users SET firstName = ?, lastName= ?, email= ?, address=? WHERE id = ? ",
    [firstName, lastName, email, address, id]
  );

  return res.status(200).json({
    message: "ok",
  });
};
let deleteUser = async (req, res) => {
  const getId = req.params.userId;
  await pool.execute("DELETE FROM users WHERE `id` = ?", [getId]);
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getHomepage,
  getDetailUser,
  createNewUser,
  deleteUser,
  updateNewUser,
};
