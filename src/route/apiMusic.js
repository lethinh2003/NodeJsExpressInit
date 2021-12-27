import express from "express";
import APIMusicController from "../controller/APIMusicController";
let router = express.Router();
const initAPIMusic = (app) => {
  router.get("/category", APIMusicController.getCategory);
  router.get("/listmusic", APIMusicController.getListMusic);
  router.get("/popularmusic", APIMusicController.getPopularMusic);
  router.post("/update_view", APIMusicController.updateView);
  //   router.get("/user/:userId", APIController.getDetailUser);
  //   router.post("/create_new_user", APIController.createNewUser);
  //   router.get("/delete_user/:userId", APIController.deleteUser);
  return app.use("/api/music", router);
};

export default initAPIMusic;
