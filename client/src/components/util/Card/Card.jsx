import React from "react";
import Banner from "../Banner/Banner";
import { CompletedChecker } from "../../../View/queries/dailyChallenge/CompletedChecker";

import { useRemoveDuplicatedSubmissions } from "../../../View/queries/dailyChallenge/hooks/useRemoveDuplicates";

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
