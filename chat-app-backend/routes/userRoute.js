const router = require("express").Router();
const { register, login, logout, allUsers } = require("../controllers/userController");
const { secureRoute } = require("../middleware/secureRoute");
router
    .post("/register", register)
    .post("/login", login)
    .post("/logout", logout)
    .get("/all_users", secureRoute,allUsers)
module.exports = router;