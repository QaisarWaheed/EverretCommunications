import Talent from "../models/talent";

import express from "express";

const router = express.Router();

router.get("/ourtalent", async (req, res) => {
  console.log("GET /ourtalent hit");
  const ourTalent = await Talent.find();
  if (ourTalent.length > 0) {
    res.status(200).json(ourTalent);
  } else {
    res.status(404).json({ message: "no talent Found" });
  }
});

router.post("/book-talent", async (req, res) => {
  try {
    const data = req.body;
    const talent = new Talent(data);
    res.send("working");

    await talent.save();
    res.status(201).json({ message: "new talent created successfuly!!!" });
  } catch (e) {
    res.status(400).json({ message: "Failed to add new talent", e });
  }
});

export default router;
