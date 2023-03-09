import React, { useState, useEffect } from "react";

export default function Active() {
  const [active, setActive] = useState(1);

  const handleActiveClicked = (id) => {
    setActive(id);
  };

  return { active, handleActiveClicked };
}
