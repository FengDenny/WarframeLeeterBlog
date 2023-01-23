const express = require("express");
const {
  GET_LANGUAGE_STATS,
  GET_SKILL_STATS,
} = require("../Models/queries/statistics/statistic");

const { leetcode_endpoint } = require("../endpoint/endpoints");

const router = express.Router();

router.get("/languageStats", (res, req) =>
  leetcode_endpoint(req, GET_LANGUAGE_STATS)
);
router.get("/skillStats", (res, req) =>
  leetcode_endpoint(req, GET_SKILL_STATS)
);

module.exports = router;
