import { POSTQueriesByYear } from "../QueriesTemplate";

export const yearsArray = [2021, 2022, 2023];

export const yearEndpoints = () => {
  return yearsArray
    .map((year) =>
      POSTQueriesByYear("userProfileCalendarByYear", "warframeleeter", year)
    )
    .reverse();
};
