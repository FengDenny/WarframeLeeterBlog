const express = require("express");
const {
  GET_CONTEST_RATING,
  GET_PROBLEM_SOLVED_RATING,
} = require("../Models/queries/ratings/ratings");

const router = express.Router();

router.post("/contestRating", GET_CONTEST_RATING);
router.post("/problemSolvedRating", GET_PROBLEM_SOLVED_RATING);

module.exports = router;
