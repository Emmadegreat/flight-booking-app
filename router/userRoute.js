const router = require("express").Router();

const controller = require("../controller/userController")


router
    .get("/", controller.getUsers)
    .get("/:id", controller.getSingleUser)
    .post("/", controller.createUser)
    .put("/:id", controller.updateUser);

module.exports = router;