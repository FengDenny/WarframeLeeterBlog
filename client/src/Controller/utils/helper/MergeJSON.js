export const MergeJSON = (list1, list2) => {
  const map = new Map();

  list1.forEach((item) => item && map.set(item.questionTitle, item));

  list2.forEach(
    (item) =>
      item &&
      map.set(item.questionTitle, { ...map.get(item.questionTitle), ...item })
  );
  const mergedArr = Array.from(map.values());

  return { mergedArr };
};
