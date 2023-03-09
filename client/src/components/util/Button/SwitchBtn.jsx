import React from "react";

import SwitchStyle from "../../../scss/util/Button/SwitchButtons.module.scss";

import { switchBtns } from "../../../Model/SwitchBtns";

export default function SwitchBtn({ active, handleActiveClicked }) {
  return switchBtns
    .map((items) => {
      const { id, name, svg } = items;

      return (
        <button
          className={`${SwitchStyle.switchBtns}
      ${active === id ? SwitchStyle.active : null}`}
          onClick={() => handleActiveClicked(id)}
          name={name}
          key={id}
        >
          {svg}
        </button>
      );
    })
    .reverse();
}
