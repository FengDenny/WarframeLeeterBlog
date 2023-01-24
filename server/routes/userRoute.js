const express = require("express");
const {
  GET_USER_STATS,
  GET_USER_PROFILE_CALENDAR,
  GET_USER_PUBLIC_PROFILE,
} = require("../Models/queries/user/user");

const router = express.Router();

router.post("/userStats", GET_USER_STATS);
router.post("/userProfileCalendar", GET_USER_PROFILE_CALENDAR);
router.post("/userPublicProfile", GET_USER_PUBLIC_PROFILE);

module.exports = router;
