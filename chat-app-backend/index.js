const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const user = require("./routes/userRoute");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

connectDb();

app.use("/user", user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
