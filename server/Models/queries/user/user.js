const { username } = require("../../username");

exports.GET_USER_STATS = `
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

exports.GET_USER_PROFILE_CALENDAR = `
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

exports.GET_USER_PUBLIC_PROFILE = `
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
