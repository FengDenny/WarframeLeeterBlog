const { leetcode_endpoint } = require("../../../endpoint/endpoints");

exports.GET_ALL_BADGES = async (req, res, next) => {
  const { username } = req.body;

  const badgeQuery = `
    query {
      matchedUser(username: "${username}") {
      badges {
        id
        name
        shortName
        displayName
        icon
        hoverText
        medal {
          slug
          config {
            iconGif
            iconGifBackground
          }
        }
        creationDate
        category
      }
      upcomingBadges {
        name
        icon
        progress
      }
      }
      }
  `;

  try {
    leetcode_endpoint(badgeQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_ACTIVE_BADGE = async (req, res, next) => {
  const { username } = req.body;
  const badgeQuery = `
  query {
    matchedUser(username: "${username}") {
      activeBadge {
        displayName
        icon
      }
    }
  }
  `;
  try {
    leetcode_endpoint(badgeQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_CURRENT_CHALLENGE_BADGE = async (req, res, next) => {
  const { year, month } = req.body;
  const badgeQuery = `
  query {
    dailyChallengeMedal(year: ${year}, month: ${month}) {
      name
      config {
        icon
      }
    }
  }
  `;
  try {
    leetcode_endpoint(badgeQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};
