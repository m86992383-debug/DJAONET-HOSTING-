import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const token = jwt.sign(
    { email: req.body.email },
    "SUPER_SECRET_KEY",
    { expiresIn: "7d" }
  );

  res.json({
    success: true,
    token
  });
});

router.post("/register", (req, res) => {
  res.json({
    success: true,
    message: "Account created"
  });
});

export default router;
