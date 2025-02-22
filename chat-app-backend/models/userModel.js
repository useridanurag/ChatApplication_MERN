const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        maxLength: 20,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const UserModel = model("User", UserSchema);

module.exports = UserModel;