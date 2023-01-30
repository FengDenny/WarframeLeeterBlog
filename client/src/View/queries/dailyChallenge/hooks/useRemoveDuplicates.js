export const useRemoveDuplicatedSubmissions = (data) => {
  const submissions = new Set();

  for (const item of data) {
    if (!submissions.has(item.title)) {
      submissions.add(item.title);
    }
  }

  return { submissions };
};
