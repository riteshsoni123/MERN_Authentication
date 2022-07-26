require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const { $where } = require("./models/User");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);

process.on("inhandledRejecion", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
