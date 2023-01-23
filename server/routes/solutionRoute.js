const express = require("express");
const {
  GET_USER_SOLUTION_TOPIC,
  GET_AC_SUBMISSIONS,
  GET_RECENT_SUBMISSIONS,
} = require("../Models/queries/solutions/soutionSubmissions");

const { leetcode_endpoint } = require("../endpoint/endpoints");

const router = express.Router();

router.get("/solutionTopic", (res, req) =>
  leetcode_endpoint(req, GET_USER_SOLUTION_TOPIC)
);
router.get("/acSubmissions", (res, req) =>
  leetcode_endpoint(req, GET_AC_SUBMISSIONS)
);
router.get("/recentSolutions", (res, req) =>
  leetcode_endpoint(req, GET_RECENT_SUBMISSIONS)
);

module.exports = router;
