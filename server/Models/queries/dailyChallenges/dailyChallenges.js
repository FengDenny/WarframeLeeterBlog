exports.GET_DAILY_QUESTION = `
query questionOfToday {
    activeDailyCodingChallengeQuestion {
      date
      userStatus
      link
      question {
        acRate
        difficulty
        freqBar
        frontendQuestionId: questionFrontendId
        isFavor
        paidOnly: isPaidOnly
        status
        title
        titleSlug
        hasVideoSolution
        hasSolution
        topicTags {
          name
          id
          slug
        }
      }
    }
  }
`;

exports.GET_DAILY_QUESTION_RECORDS = `
query {
    dailyCodingChallengeV2(year: 2023, month: 1) {
      
      challenges {
        date
        userStatus
        link
        question {
          questionFrontendId
          title
          titleSlug
        }
      }
      weeklyChallenges {
        date
        userStatus
        link
        question {
          questionFrontendId
          title
          titleSlug
        }
      }
    }
  }  
`;
exports.GET_DAILY_QUESTION_DETAILS = `
query getQuestionDetail($titleSlug: String!) {
    isCurrentUserAuthenticated
    question(titleSlug: $titleSlug) {
      questionId
      questionFrontendId
      questionTitle
      translatedTitle
      questionTitleSlug
      content
      translatedContent
      difficulty
      stats
      allowDiscuss
      contributors {
        username
        profileUrl
        __typename
      }
      similarQuestions
      mysqlSchemas
      randomQuestionUrl
      sessionId
      categoryTitle
      submitUrl
      interpretUrl
      codeDefinition
      sampleTestCase
      enableTestMode
      metaData
      enableRunCode
      enableSubmit
      judgerAvailable
      infoVerified
      envInfo
      urlManager
      article
      questionDetailUrl
      libraryUrl
      adminUrl
      companyTags {
        name
        slug
        translatedName
        __typename
      }
      companyTagStats
      topicTags {
        name
        slug
        translatedName
        __typename
      }
      __typename
    }
    interviewed {
      interviewedUrl
      companies {
        id
        name
        slug
        __typename
      }
      timeOptions {
        id
        name
        __typename
      }
      stageOptions {
        id
        name
        __typename
      }
      __typename
    }
    subscribeUrl
    isPremium
    loginUrl
  }
  
`;
