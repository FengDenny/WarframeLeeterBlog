import React from "react";

import { ShowPromisesData } from "../../queries/QueriesTemplate";

export default function SkillTags() {
  const { skillsRating } = ShowPromisesData();

  const { advanced, fundamental, intermediate } =
    skillsRating !== undefined && skillsRating.matchedUser.tagProblemCounts;

  return { advanced, fundamental, intermediate };
}
