import express from "express";
import formRouter from "./routes/formRouter.js";
import pool from "./models/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend is working.");
});

app.use("/form", formRouter);

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Unable to connect to the database:", err.message);
    console.error("Error details:", err);
    process.exit(1);
  } else {
    console.log(
      "Connection to the database has been established successfully."
    );
    connection.release();
  }
});

app.listen();
