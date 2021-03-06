import pool from "../configs/connectDB";
let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `users`");
  return res.render("./index.ejs", { data: rows });
};
let getDetailUser = async (req, res) => {
  const getUserId = req.params.userId;
  const [rows, fields] = await pool.execute(
    "SELECT * FROM `users` WHERE `id` = ?",
    [getUserId]
  );
  return res.render("./detailUser.ejs", { data: rows });
};
let createNewUser = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "INSERT INTO users (firstName, lastName, email, address) VALUES (?,?,?,?)",
    [firstName, lastName, email, address]
  );

  return res.redirect("/");
};
let updateNewUser = async (req, res) => {
  const { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    "UPDATE users SET firstName = ?, lastName= ?, email= ?, address=? WHERE id = ? ",
    [firstName, lastName, email, address, id]
  );

  return res.redirect("/");
};
let deleteUser = async (req, res) => {
  const getId = req.params.userId;
  await pool.execute("DELETE FROM users WHERE `id` = ?", [getId]);
  return res.redirect("/");
};
let editUser = async (req, res) => {
  const getId = req.params.userId;
  const [rows, fields] = await pool.execute(
    "SELECT * FROM users WHERE `id` = ?",
    [getId]
  );

  return res.render("./editUser", { data: rows[0] });
};
let getAbout = (req, res) => {
  return res.send("Le Thinh");
};
module.exports = {
  getHomepage,
  getAbout,
  getDetailUser,
  createNewUser,
  deleteUser,
  editUser,
  updateNewUser,
};
