import { useState, useEffect } from "react";
import { postEndpoint } from "../../Controller/endpoint";
export const Queries = (endpoint, user) => {
  const [username, _] = useState(user);
  const [data, setData] = useState("");
  useEffect(() => {
    const data = { username };
    postEndpoint(endpoint, data).then((items) => setData(items.data));
  }, [username, endpoint]);
  return { data };
};
