const express = require("express");
const {
  GET_ALL_BADGES,
  GET_CURRENT_CHALLENGE_BADGE,
  GET_ACTIVE_BADGE,
} = require("../Models/queries/badges/badges");

const router = express.Router();

router.post("/badges", GET_ALL_BADGES);

router.post("/activeBadge", GET_ACTIVE_BADGE);
router.post("/currentChallengeBadge", GET_CURRENT_CHALLENGE_BADGE);

module.exports = router;
