import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:userId", homeController.getDetailUser);
  router.post("/create_new_user", homeController.createNewUser);
  router.post("/update_new_user", homeController.updateNewUser);
  router.get("/delete_user/:userId", homeController.deleteUser);
  router.get("/edit_user/:userId", homeController.editUser);
  router.get("/about", homeController.getAbout);
  return app.use("/", router);
};

export default initWebRoute;
