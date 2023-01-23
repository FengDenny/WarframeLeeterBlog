const { username } = require("../../username");

exports.GET_ALL_BADGES = `
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
exports.GET_ACTIVE_BADGE = `
query{
  matchedUser(username:"${username}") {
    activeBadge {
      displayName
      icon
    }
  }
}
`;

exports.GET_CURRENT_CHALLENGE_BADGE = `
query {
  dailyChallengeMedal(year: 2023, month: 1) {
    name
    config {
      icon
    }
  }
}
  `;
