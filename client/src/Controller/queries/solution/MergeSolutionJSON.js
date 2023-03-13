import { useState, useEffect } from "react";
import {
  PostQuantityData,
  PostTitleSlugData,
} from "../../../Controller/queries/QueriesTemplate";

export default function MergeSolutionJSON() {
  const { solutions } = PostQuantityData();

  const [qDetails, setQDetails] = useState([]);

  const [solution, setSolution] = useState([]);

  useEffect(() => {
    for (let i in solutions) {
      let items = solutions[i];
      const { questionTitle, id, post, title, url, viewCount } = items.node;
      const createTitleSlug =
        questionTitle && questionTitle.replaceAll(" ", "-").toLowerCase();

      const { detail } = PostTitleSlugData(createTitleSlug);

      detail.then((items) => setQDetails((data) => [...data, items.question]));

      setSolution((items) => [
        ...items,
        {
          id,
          post,
          questionTitle,
          titleSlug: createTitleSlug,
          title,
          url,
          viewCount,
        },
      ]);
    }
  }, [solutions]);

  return { solution, qDetails };
}
