const router = require("express").Router();
const { register, login, logout } = require("../controllers/userController");
router
    .post("/register", register)
    .post("/login", login)
    .post("/logout", logout)
module.exports = router;