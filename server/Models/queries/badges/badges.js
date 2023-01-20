exports.GET_ALL_BADGES = `query {
  matchedUser(username: "warframeleeter") {
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
  }`;
