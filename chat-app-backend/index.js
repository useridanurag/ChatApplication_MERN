const express = require("express");
const app = express();
const connectDb = require("./config/db");
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const user=require("./routes/userRoute");
connectDb();
app.use("/user",user);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is UP");
})

