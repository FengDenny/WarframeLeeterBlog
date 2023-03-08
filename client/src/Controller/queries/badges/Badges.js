import { ShowPromisesData } from "../../../Controller/queries/QueriesTemplate";

export const badgesData = () => {
  const { badge } = ShowPromisesData();

  const badges = badge && badge.matchedUser.badges;

  const upcoming = badge && badge.matchedUser.upcomingBadges;

  return { badges, upcoming };
};
