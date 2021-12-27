import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPI from "./route/api";
import initAPIMusic from "./route/apiMusic";
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const port = process.env.port || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPI(app);
initAPIMusic(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
