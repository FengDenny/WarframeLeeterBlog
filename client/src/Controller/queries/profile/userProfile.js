import { PostByYearData } from "../QueriesTemplate";

export const yearEndpoints = () => {
  const yearsArray = [2021, 2022, 2023];

  return yearsArray.map((year) => PostByYearData(year)).reverse();
};
