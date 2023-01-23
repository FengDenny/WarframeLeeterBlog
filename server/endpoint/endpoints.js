const request = require("request");

exports.leetcode_endpoint = (req, query) => {
  return request(
    `https://leetcode.com/graphql?query=${query}`,
    function (error, response, body) {
      req.send(body);
    }
  );
};
