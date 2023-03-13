import { useState, useEffect } from "react";
import { postEndpoint, getEndpoint } from "../../Controller/endpoint";

const PostPromise = async () => {
  const endpoints = [
    "problemSolvedRating",
    "languageStats",
    "skillStats",
    "recentSolutions",
    "badges",
    "userProfileCalendar",
  ];

  return await Promise.all(
    endpoints.map(async (endpoint) => {
      const response = await postEndpoint(endpoint, {
        username: "warframeleeter",
      });

      return response.data;
    })
  ).then(
    ([
      problemSolvedRating,
      languageStats,
      skillStats,
      recentSolutions,
      badges,
      calendar,
    ]) => [
      {
        problemSolvedRating,
        languageStats,
        skillStats,
        recentSolutions,
        badges,
        calendar,
      },
    ]
  );
};

const PostByTitleSlug = async (endpoint, titleSlug) => {
  const response = await postEndpoint(endpoint, {
    titleSlug,
  });

  return response.data;
};

export const PostTitleSlugData = (titleSlug) => {
  const detail = PostByTitleSlug("dailyQuestionDetails", titleSlug);
  return { detail };
};

const PostPromiseByQuantity = async (endpoint, quantity) => {
  const response = await postEndpoint(endpoint, {
    username: "warframeleeter",
    quantity,
  });

  return response.data;
};

export const PostQuantityData = () => {
  const [solutions, setSolutions] = useState();

  useEffect(() => {
    PostPromiseByQuantity("solutionTopic", 150).then((items) => {
      setSolutions(items.userSolutionTopics.edges);
    });
  }, []);
  return { solutions };
};

export const PostData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    PostPromise().then((items) => {
      setData(items);
    });
  }, []);

  return { data };
};

const PostPromiseByDate = async () => {
  const endpoints = ["dailyQuestionRecords"];

  return await Promise.all(
    endpoints.map(async (endpoint) => {
      const response = await postEndpoint(endpoint, {
        username: "warframeleeter",
        year: 2023,
        month: 3,
      });

      return response.data;
    })
  );
};

export const PostByDateData = () => {
  const [dateData, setDateData] = useState();

  useEffect(() => {
    PostPromiseByDate().then((items) => {
      setDateData(items);
    });
  }, []);

  return { dateData };
};

const PostPromiseByYear = async (activeYear) => {
  const endpoints = ["userProfileCalendarByYear"];

  return await Promise.all(
    endpoints.map(async (endpoint) => {
      const response = await postEndpoint(endpoint, {
        username: "warframeleeter",
        year: activeYear,
      });

      return response.data;
    })
  );
};

export const PostByYearData = (activeYear) => {
  const [dateData, setDateData] = useState();

  useEffect(() => {
    PostPromiseByYear(activeYear).then((items) => {
      setDateData(items);
    });
  }, [activeYear]);

  return { dateData };
};

const GetPromise = async () => {
  const endpoints = ["dailyQuestion"];

  return await Promise.all(
    endpoints.map(async (endpoint) => {
      const response = await getEndpoint(endpoint, {
        username: "warframeleeter",
      });

      return await response.data;
    })
  );
};

export const GetData = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    GetPromise().then((items) => {
      setItems(items);
    });
  }, []);

  return { items };
};

export const ShowPromisesData = () => {
  const [language, setLanguage] = useState();
  const [solvedRating, setSolvedRating] = useState();
  const [skillsRating, setSkillRating] = useState();
  const [recentSolution, setRecentSolution] = useState();
  const [badge, setBadge] = useState();
  const [userCalendar, setUserCalendar] = useState();

  const { data } = PostData();

  useEffect(() => {
    data &&
      data.map((items) => {
        return [
          setLanguage(items.languageStats),
          setSolvedRating(items.problemSolvedRating),
          setSkillRating(items.skillStats),
          setRecentSolution(items.recentSolutions),
          setBadge(items.badges),
          setUserCalendar(items.calendar),
        ];
      });
  }, [data]);

  return {
    language,
    solvedRating,
    skillsRating,
    recentSolution,
    badge,
    userCalendar,
  };
};
