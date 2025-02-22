const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { createTokenAndSaveCookie } = require("../jwt/generateToken");

const register = async (req, res) => {
    try {
        const { fullName, email, contact, password, confirmPassword } = req.body;
        const getEmail = await User.findOne({ email });
        const getContact = await User.findOne({ contact });
        if (getEmail || getContact) {
            return res.status(400).json({ error: "User already registered with this email or phone number." });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password does not match." });
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            fullName,
            email,
            contact,
            password: hashPassword,
        });
        await newUser.save();
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(200).json({ message: "User registered successfully." });
        }

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error !",
        })
    }
}
const login = async (req, res) => {
    try {
        const { email, contact, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(user.password, password);
        if (!user || !isMatch) {
            res.status(400).json({ message: "Invalid credentaial." });
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({ message: "User Logged in Successfully." })
    }
    catch (error) {
        res.status(500).json({
            success: "false",
            message: "Internal Server Error !"
        })
    }
}
const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User logout successfully." })
    }
    catch (error) {
        res.status(500).json({
            success: "false",
            message: "Internal Server Error !"
        })
    }
}

module.exports = { register, login, logout }