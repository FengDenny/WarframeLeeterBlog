import React from "react";
import bannerStyle from "../../../scss/util/Banner/Banner.module.scss";

export default function Banner({ title, style, children }) {
  return (
    <div className={style}>
      {title && <h2 className={bannerStyle.title}>{title}</h2>}
      {children}
    </div>
  );
}
