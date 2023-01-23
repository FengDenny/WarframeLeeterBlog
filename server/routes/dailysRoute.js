const express = require("express");
const {
  GET_DAILY_QUESTION,
  GET_DAILY_QUESTION_RECORDS,
  GET_DAILY_QUESTION_DETAILS,
} = require("../Models/queries/dailyChallenges/dailyChallenges");

const { leetcode_endpoint } = require("../endpoint/endpoints");

const router = express.Router();

router.get("/dailyQuestion", (res, req) =>
  leetcode_endpoint(req, GET_DAILY_QUESTION)
);
router.get("/dailyQuestionRecords", (res, req) =>
  leetcode_endpoint(req, GET_DAILY_QUESTION_RECORDS)
);

module.exports = router;
