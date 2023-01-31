import React from "react";
import bannerStyle from "../../../scss/util/Banner/Banner.module.scss";

export default function Banner({ title, style }) {
  return (
    <div className={`${bannerStyle.container} ${style}`}>
      <h2 className={bannerStyle.title}>{title}</h2>
    </div>
  );
}
