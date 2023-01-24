const { leetcode_endpoint } = require("../../../endpoint/endpoints");

exports.GET_LANGUAGE_STATS = (req, res, next) => {
  const { username } = req.body;
  const statsQuery = `
query{
    matchedUser(username: "${username}") {
      languageProblemCount {
        languageName
        problemsSolved
      }
    }
  }
`;
  try {
    leetcode_endpoint(statsQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_SKILL_STATS = (req, res, next) => {
  const { username } = req.body;
  const statsQuery = `
query{
    matchedUser(username: "${username}") {
        tagProblemCounts {
            advanced {
              tagName
              tagSlug
              problemsSolved
            }
            intermediate {
              tagName
              tagSlug
              problemsSolved
            }
            fundamental {
              tagName
              tagSlug
              problemsSolved
            }
          }
    }
  }
      
`;
  try {
    leetcode_endpoint(statsQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};
