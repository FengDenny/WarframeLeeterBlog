const { leetcode_endpoint } = require("../../../endpoint/endpoints");
exports.GET_USER_STATS = (req, res, next) => {
  const { username } = req.body;
  const usersQuery = `
query  {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: "${username}") {
      username
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;
  try {
    leetcode_endpoint(usersQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_USER_PROFILE_CALENDAR = (req, res, next) => {
  const { username } = req.body;
  const usersQuery = `
query {
    matchedUser(username: "${username}") {
      userCalendar(year:2023) {
        activeYears
        streak
        totalActiveDays
        dccBadges {
          timestamp
          badge {
            name
            icon
          }
        }
        submissionCalendar
      }
    }
  }
      
`;
  try {
    leetcode_endpoint(usersQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_USER_PUBLIC_PROFILE = (req, res, next) => {
  const { username } = req.body;
  const usersQuery = `
  query {
      matchedUser(username: "${username}") {
        contestBadge {
          name
          expired
          hoverText
          icon
        }
        username
        githubUrl
        twitterUrl
        linkedinUrl
        profile {
          ranking
          userAvatar
          realName
          aboutMe
          school
          websites
          countryName
          company
          jobTitle
          skillTags
          postViewCount
          postViewCountDiff
          reputation
          reputationDiff
          solutionCount
          solutionCountDiff
          categoryDiscussCount
          categoryDiscussCountDiff
        }
      }
    }    
  `;
  try {
    leetcode_endpoint(usersQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};
