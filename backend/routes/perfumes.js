const express = require("express");
const { getAllPerfumes, perfumeByID } = require("../controllers/perfumes.js");
const router = express.Router();

router.get("/", getAllPerfumes);
router.get("/:_id", perfumeByID);

module.exports = router;
