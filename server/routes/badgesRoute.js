const express = require("express");
const {
  GET_ALL_BADGES,
  GET_CURRENT_CHALLENGE_BADGE,
  GET_ACTIVE_BADGE,
} = require("../Models/queries/badges/badges");

const { leetcode_endpoint } = require("../endpoint/endpoints");

const router = express.Router();

router.get("/badges", (res, req) => leetcode_endpoint(req, GET_ALL_BADGES));

router.get("/currentChallengeBadge", (res, req) =>
  leetcode_endpoint(req, GET_CURRENT_CHALLENGE_BADGE)
);

router.get(`/activeBadge`, (res, req) =>
  leetcode_endpoint(req, GET_ACTIVE_BADGE)
);

module.exports = router;
