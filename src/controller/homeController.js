let getHomepage = (req, res) => {
  //logic
  return res.render("./index.ejs");
};
let getAbout = (req, res) => {
  return res.send("Le Thinh");
};
module.exports = {
  getHomepage,
  getAbout,
};
