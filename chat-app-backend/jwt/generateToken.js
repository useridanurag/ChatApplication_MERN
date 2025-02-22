const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
 const createTokenAndSaveCookie = (userId, res) => {
    const key = process.env.JWT_TOKEN
    const token = jwt.sign({ userId }, key, { expiresIn: "10d" });

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

}

module.exports={createTokenAndSaveCookie};