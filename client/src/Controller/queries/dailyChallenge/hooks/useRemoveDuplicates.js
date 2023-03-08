export const useRemoveDuplicatedSubmissions = (data) => {
  const submissions = new Set();
  // Verify object is not empty (null or undefined ) else set it to {}
  for (const [, value] of Object.entries(data || {})) {
    if (!submissions.has(value.title)) {
      submissions.add(value.title);
    }
  }

  return { submissions };
};
