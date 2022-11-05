const router = require("express").Router();

const controller = require("../controller/userController")


router
    .get("/", controller.getUsers)
    .get("/:id", controller.getSingleUser)
    .post("/", controller.createUser)
    .put("/:id", controller.updateUser)
    .delete ("/:id", controller.deleteUser);

module.exports = router;