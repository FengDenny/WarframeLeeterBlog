const { username } = require("../../username");

exports.GET_CONTEST_RATING = `
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
exports.GET_PROBLEM_SOLVED_RATING = `
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
