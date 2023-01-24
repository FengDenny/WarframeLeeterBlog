const express = require("express");
const {
  GET_USER_SOLUTION_TOPIC,
  GET_AC_SUBMISSIONS,
  GET_RECENT_SUBMISSIONS,
} = require("../Models/queries/solutions/soutionSubmissions");

const router = express.Router();

router.post("/solutionTopic", GET_USER_SOLUTION_TOPIC);

router.post("/acSubmissions", GET_AC_SUBMISSIONS);

router.post("/recentSolutions", GET_RECENT_SUBMISSIONS);

module.exports = router;
