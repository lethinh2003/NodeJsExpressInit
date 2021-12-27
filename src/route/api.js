import express from "express";
import APIController from "../controller/APIController";
let router = express.Router();
const initAPI = (app) => {
  router.get("/users", APIController.getHomepage);
  router.get("/user/:userId", APIController.getDetailUser);
  router.post("/create_new_user", APIController.createNewUser);
  router.post("/update_user", APIController.updateNewUser);
  router.get("/delete_user/:userId", APIController.deleteUser);
  return app.use("/api", router);
};

export default initAPI;
