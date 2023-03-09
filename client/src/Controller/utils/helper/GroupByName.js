export const GroupByName = (data) => {
  return Object.entries(
    data !== undefined &&
      data.reduce((acc, { name, id, icon, displayName }) => {
        acc[name] = acc[name] || [];
        acc[name].push({ id, displayName, icon });
        return acc;
      }, {})
  ).map(([key, icon]) => ({
    name: key,
    icon,
  }));
};
