const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const user = require("./routes/userRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();
app.use(cookieParser())
app.use(express.json());
app.use(cors());

connectDb();

app.use("/api/user", user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
