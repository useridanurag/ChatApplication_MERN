const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { createTokenAndSaveCookie } = require("../jwt/generateToken");

const register = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;
        const getEmail = await User.findOne({ email });
        if (getEmail) {
            return res.status(400).json({ error: "User already registered." });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password does not match." });
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            fullName,
            email,
            password: hashPassword,
        });
        await newUser.save();
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(200).json({
                message: "User registered successfully.",
                user: {
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    email: newUser.email,
                }
            });
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
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ error: "Invalid credential." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ error: "Invalid credential." });
        }

        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({
            message: "User Logged in Successfully.",
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
            }
        })
    }
    catch (error) {
        console.log(error);
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
const allUsers = async (req, res) => {
    try {
        const loginUser = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loginUser } }).select("-password");
        res.status(200).json({
            message: "All users fetched .",
            users: filteredUsers,
        })

    } catch (error) {
        console.log("Error in allUsers controller. " + error);
        res.status(500).json({
            success: "false",
            message: "Internal Server Error !"
        })
    }
}
module.exports = { register, login, logout, allUsers }