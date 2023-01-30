import React from "react";
import Banner from "../Banner/Banner";

import { useRemoveDuplicatedSubmissions } from "../../../View/queries/dailyChallenge/hooks/useRemoveDuplicates";
import { useGetRecentSubmission } from "../../../View/queries/dailyChallenge/hooks/useGetRecentSubmission";

export default function Card({ styling, children }) {
  // console.log(submissions);
  const { data } = useGetRecentSubmission("warframeleeter");

  const { submissions } = useRemoveDuplicatedSubmissions(data);

  console.log(submissions);
  return (
    <div className={styling}>
      <Banner title={`Completed`} />
      {children}
    </div>
  );
}
