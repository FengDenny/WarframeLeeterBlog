import { useState, useEffect } from "react";
import { publicProfileController } from "../../../../Controller/streak/publicProfileController";

export const PublicProfile = () => {
  const [username, _] = useState("warframeleeter");
  const [data, setData] = useState("");

  useEffect(() => {
    publicProfileController({ username }).then((item) => setData(item));
  }, [username]);

  return data;
};
