import connection from "../configs/connectDB";
let getHomepage = (req, res) => {
  let data = [];
  connection.query(
    "SELECT * FROM `users` WHERE  `id` > 0",
    function (err, results, fields) {
      results.map((row) => {
        const currentData = {
          id: row.id,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          address: row.address,
        };
        data.push(currentData);
      });
      console.log(data);
      return res.render("./index.ejs", { data: JSON.stringify(data) });
    }
  );
};
let getAbout = (req, res) => {
  return res.send("Le Thinh");
};
module.exports = {
  getHomepage,
  getAbout,
};
