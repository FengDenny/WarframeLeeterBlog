const express = require("express");
const {
  GET_CONTEST_RATING,
  GET_PROBLEM_SOLVED_RATING,
} = require("../Models/queries/ratings/ratings");

const { leetcode_endpoint } = require("../endpoint/endpoints");

const router = express.Router();

router.get("/contestRating", (res, req) =>
  leetcode_endpoint(req, GET_CONTEST_RATING)
);
router.get("/problemSolvedRating", (res, req) =>
  leetcode_endpoint(req, GET_PROBLEM_SOLVED_RATING)
);
module.exports = router;
