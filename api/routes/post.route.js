import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("Hello routers");
});

router.post("/test", (req, res) => {
  console.log("Hello routers");
});

router.put("/test", (req, res) => {
  console.log("Hello routers");
});

router.delete("/test", (req, res) => {
  console.log("Hello routers");
});

export default router;
