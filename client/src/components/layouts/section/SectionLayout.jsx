import React from "react";
import layoutStyles from "../../../scss/Section/SectionLayout.module.scss";
import globalStyle from "../../../scss/global/global.module.scss";

export default function SectionLayout({ style, title, description, children }) {
  return (
    <section className={style}>
      <div className={globalStyle.container}>
        <div className={`${layoutStyles.header}`}>
          <h2 className={layoutStyles.heading}>{title}</h2>
          <h4 className={layoutStyles.description}>{description}</h4>
        </div>
      </div>
      <div className={globalStyle.container}>{children}</div>
    </section>
  );
}
