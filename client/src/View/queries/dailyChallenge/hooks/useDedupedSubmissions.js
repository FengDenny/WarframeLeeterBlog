import { useState, useEffect } from "react";
import { useRemoveDuplicatedSubmissions } from "./useRemoveDuplicates";
import { useGetRecentSubmission } from "./useGetRecentSubmission";

export const DeDupedRecentSubmissions = () => {
  const { data } = useGetRecentSubmission("warframeleeter");
  const { submissions } = useRemoveDuplicatedSubmissions(data);

  const deDupedValues = [...submissions];

  return { deDupedValues };
};
