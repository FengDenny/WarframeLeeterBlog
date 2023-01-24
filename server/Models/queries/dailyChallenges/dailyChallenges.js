const { leetcode_endpoint } = require("../../../endpoint/endpoints");

exports.GET_DAILY_QUESTION = (req, res, next) => {
  const dailyQuestionQuery = `query questionOfToday {
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
  }`;

  try {
    leetcode_endpoint(dailyQuestionQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_DAILY_QUESTION_RECORDS = (req, res, next) => {
  const { year, month } = req.body;
  const dailyQuestionQuery = `
  query {
      dailyCodingChallengeV2(year: ${year}, month: ${month}) {
        
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
  try {
    leetcode_endpoint(dailyQuestionQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};

exports.GET_DAILY_QUESTION_DETAILS = (req, res, next) => {
  const { titleSlug } = req.body;
  const dailyQuestionQuery = `
  query {
      isCurrentUserAuthenticated
      question(titleSlug: "${titleSlug}") {
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
  try {
    leetcode_endpoint(dailyQuestionQuery).then((response) => {
      return res.send(JSON.stringify(response.data));
    });
  } catch (err) {
    console.log(err);
  }
};
