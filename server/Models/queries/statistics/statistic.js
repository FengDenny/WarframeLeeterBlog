const { username } = require("../../username");

exports.GET_LANGUAGE_STATS = `
query{
    matchedUser(username: "${username}") {
      languageProblemCount {
        languageName
        problemsSolved
      }
    }
  }
      
`;
exports.GET_SKILL_STATS = `
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
