import React from "react";
import { HandleAllBadgesRequest } from "../../../Models/queries/badges/BadgesModel";

export default function Badges() {
  const { data } = HandleAllBadgesRequest();
  data.badges && data.badges.map((badge) => console.log(badge));

  return <div>Badges</div>;
}
