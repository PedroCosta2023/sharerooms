const express = require("express");
const mongoose = require("mongoose"); // Adicione essa linha

const app = express();

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRouter");
const usersRoute = require("./routes/userRoute");

// Conectar ao banco de dados
mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error("Database connection error:", error));

app.use(express.json());

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
