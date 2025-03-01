const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(400).json({ error: "No Token, authorization denied." });
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decoded) {
            return res.status(400).json({ error: "invalid token" })
        }
        const user = await User.findById(decoded.userId).select("-password");//this user is tokenized user while creating token and send user.
        if (!user) {
            return res.status(400).json({ err: "no user found." })
        }
        if (req.user = user) { next(); }

    } catch (error) {
        console.log("Error in SecureRoute " + error);
        res.status(500).json({
            success: false,
            error: "Internal server error .",
        })
    }
}

module.exports = { secureRoute };