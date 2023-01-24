const express = require("express");
const {
  GET_DAILY_QUESTION,
  GET_DAILY_QUESTION_RECORDS,
  GET_DAILY_QUESTION_DETAILS,
} = require("../Models/queries/dailyChallenges/dailyChallenges");

const router = express.Router();

router.get("/dailyQuestion", GET_DAILY_QUESTION);
router.post("/dailyQuestionRecords", GET_DAILY_QUESTION_RECORDS);
router.post("/dailyQuestionDetails", GET_DAILY_QUESTION_DETAILS);

module.exports = router;
