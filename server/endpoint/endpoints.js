const axios = require("axios");

exports.leetcode_endpoint = async (query) => {
  const fetchRequest = await axios(
    `https://leetcode.com/graphql?query=${query}`
  ).then((response) => {
    return response.data;
  });

  return fetchRequest;
};
