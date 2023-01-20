import React, { useEffect } from "react";
import globalStyles from "../../scss/global/global.module.scss";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:5000/getBadges")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  }, []);

  return <div>Home</div>;
}
