const express = require("express");
const {
  GET_USER_STATS,
  GET_USER_PROFILE_CALENDAR,
  GET_USER_PUBLIC_PROFILE,
} = require("../Models/queries/user/user");

const { leetcode_endpoint } = require("../endpoint/endpoints");

const router = express.Router();

router.get("/userStats", (res, req) => leetcode_endpoint(req, GET_USER_STATS));
router.get("/userProfileCalendar", (res, req) =>
  leetcode_endpoint(req, GET_USER_PROFILE_CALENDAR)
);
router.get("/userPublicProfile", (res, req) => {
  return leetcode_endpoint(req, GET_USER_PUBLIC_PROFILE);
});

module.exports = router;
