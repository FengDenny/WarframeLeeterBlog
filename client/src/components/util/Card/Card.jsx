import React from "react";
import Banner from "../Banner/Banner";
import {
  useRemoveDuplicatedSubmissions,
  CompletedChecker,
} from "../../../View/queries/dailyChallenge/CompletedChecker";

export default function Card({ styling, children }) {
  // console.log(submissions);
  const { data } = CompletedChecker();

  const { submissions } = useRemoveDuplicatedSubmissions(data);

  console.log(submissions);
  return (
    <div className={styling}>
      <Banner title={`Completed`} />
      {children}
    </div>
  );
}
