const express = require("express");
const {
  GET_LANGUAGE_STATS,
  GET_SKILL_STATS,
} = require("../Models/queries/statistics/statistic");

const router = express.Router();

router.post("/languageStats", GET_LANGUAGE_STATS);
router.post("/skillStats", GET_SKILL_STATS);

module.exports = router;
