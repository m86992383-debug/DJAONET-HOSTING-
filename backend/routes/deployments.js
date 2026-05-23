import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "portfolio",
      status: "deployed",
      url: "https://portfolio.djaonethosting.xyz"
    }
  ]);
});

router.post("/upload", (req, res) => {
  res.json({
    success: true,
    message: "ZIP uploaded"
  });
});

export default router;
