import { useState, useEffect } from "react";
import { postEndpoint, getEndpoint } from "../../Controller/endpoint";

export const POSTQueriesByYear = (endpoint, user, activeYear) => {
  const [username] = useState(user);
  const [year] = useState(activeYear);
  const [yearlyData, setYearlyData] = useState("");
  useEffect(() => {
    const data = { username, year };

    postEndpoint(endpoint, data)
      .then((items) => setYearlyData(items.data))
      .catch((err) => console.log(err));
  }, [username, year, endpoint]);
  return { yearlyData };
};

const fetchGetData = (endpoint, data) => {
  const getPromise = getEndpoint(endpoint, data);

  return {
    get: wrapper(getPromise),
  };
};

const fetchPostData = (endpoint, data) => {
  const postPromise = postEndpoint(endpoint, data);
  return {
    post: wrapper(postPromise),
  };
};

const wrapper = (promise) => {
  // Set initial status
  let status = "pending";
  // store result
  let result;
  // wait for promise

  let suspend = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspend;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export const getAllBadgesResources = fetchPostData("badges", {
  username: "warframeleeter",
});

export const getDailyQuestionResources = fetchGetData("dailyQuestion", {
  username: "warframeleeter",
});

export const postDailySolvedResource = fetchPostData("solutionTopic", {
  username: "warframeleeter",
});

export const postDailyRecordsResource = fetchPostData("dailyQuestionRecords", {
  username: "warframeleeter",
  year: 2023,
  month: 3,
});

export const postProfileResource = fetchPostData("userProfileCalendar", {
  username: "warframeleeter",
});
export const postSolutionTopicResource = fetchPostData("solutionTopic", {
  username: "warframeleeter",
});

export const postSolvedRatingResource = fetchPostData("problemSolvedRating", {
  username: "warframeleeter",
});
export const postLangRatingResource = fetchPostData("languageStats", {
  username: "warframeleeter",
});
export const postSkillRatingResource = fetchPostData("skillStats", {
  username: "warframeleeter",
});
