import express from "express";
import pool from "../models/index.js"; // Import the pool object

const formRouter = express.Router();

formRouter.post("/submit-form", async (req, res) => {
  const { fullName, phoneNumber, email, course, address, educationBg } =
    req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO onlineRegistration (fullName, phoneNumber, email, course, address, educationBg) 
        VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, phoneNumber, email, course, address, educationBg]
    );

    res.status(201).json({
      message: "Form submitted successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error inserting data:", error.message);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

export default formRouter;
