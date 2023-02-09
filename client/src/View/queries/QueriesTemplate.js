import { useState, useEffect } from "react";
import { postEndpoint, getEndpoint } from "../../Controller/endpoint";
export const POSTQueries = (endpoint, user) => {
  const [username, _] = useState(user);
  const [data, setData] = useState("");
  useEffect(() => {
    const data = { username };
    postEndpoint(endpoint, data).then((items) => setData(items.data));
  }, [username, endpoint]);
  return { data };
};

export const GETQueries = (endpoint, user) => {
  const [username, _] = useState(user);
  const [data, setData] = useState("");
  useEffect(() => {
    const data = { username };
    getEndpoint(endpoint, data).then((items) => setData(items.data));
  }, [username, endpoint]);
  return { data };
};
