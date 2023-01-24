const { leetcode_endpoint } = require("../../../endpoint/endpoints");

exports.GET_CONTEST_RATING = (req, res, next) => {
  const { username } = req.body;
  const ratingQuery = `
  query {
      userContestRanking(username: "${username}") {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge {
          name
        }
      }
      userContestRankingHistory(username: "${username}") {
        attended
        trendDirection
        problemsSolved
        totalProblems
        finishTimeInSeconds
        rating
        ranking
        contest {
          title
          startTime
        }
      }
    }
  `;
  try {
    leetcode_endpoint(ratingQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_PROBLEM_SOLVED_RATING = (req, res, next) => {
  const { username } = req.body;

  const ratingQuery = `
query {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: "${username}") {
      problemsSolvedBeatsStats {
        difficulty
        percentage
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }

`;
  try {
    leetcode_endpoint(ratingQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};
