const { username } = require("../../username");

exports.GET_USER_SOLUTION_TOPIC = `
query {
    userSolutionTopics(
      username: "${username}"
      orderBy: newest_to_oldest
      skip: 0
      first: 50
    ) {
      pageInfo {
        hasNextPage
      }
      edges { 
        node {
          id
          title
          url
          viewCount
          questionTitle
          post {
            creationDate
            voteCount
          
          }
        }
      }
    }
  }
`;
exports.GET_AC_SUBMISSIONS = `
query {
    recentAcSubmissionList(username: "${username}", limit: 50) {
      id
      title
      titleSlug
      timestamp
    }
  }
`;
exports.GET_RECENT_SUBMISSIONS = `
query {
    recentSubmissionList(username: "${username}") {
    title
    titleSlug
    timestamp
    statusDisplay
    lang
    }
  }
`;
