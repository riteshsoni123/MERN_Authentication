require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
