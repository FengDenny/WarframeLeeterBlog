const { leetcode_endpoint } = require("../../../endpoint/endpoints");

exports.GET_USER_SOLUTION_TOPIC = (req, res, next) => {
  const { username, quantity } = req.body;
  console.log(quantity);

  const solutionQuery = `
  query {
      userSolutionTopics(
        username: "${username}"
        orderBy: newest_to_oldest
        skip: 0
        first: ${quantity}
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

  try {
    leetcode_endpoint(solutionQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_AC_SUBMISSIONS = (req, res, next) => {
  const { username, limit } = req.body;
  const solutionQuery = `
query {
    recentAcSubmissionList(username: "${username}", limit: ${limit}) {
      id
      title
      titleSlug
      timestamp
    }
  }
`;
  try {
    leetcode_endpoint(solutionQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_RECENT_SUBMISSIONS = (req, res, next) => {
  const { username } = req.body;

  const solutionQuery = `
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
  try {
    leetcode_endpoint(solutionQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};
