import React, { useState } from "react";

import Banner from "./Banner";
import bannerStyle from "../../../scss/util/Banner/Banner.module.scss";

import { useLocalStorage } from "../../../Controller/storage/Local";

export default function Disclaimer() {
  const [disclaimer, setDisclaimer] = useLocalStorage(
    "disclaimer_confirmed",
    false
  );

  const [close, setClose] = useState(disclaimer);

  return (
    <Banner
      style={`${
        close === false ? bannerStyle.disclaimerContainer : bannerStyle.close
      }`}
    >
      <div className={bannerStyle.disclaimer}>
        <h2 className={bannerStyle.title}>
          <span className={bannerStyle.spanDescription}>
            Warframeleeter.com
          </span>
          is a fan site, and not associated with
          <span className={bannerStyle.spanDescription}>Digital Extremes</span>.
        </h2>
        <button
          className={bannerStyle.confirmed}
          aria-pressed={disclaimer}
          onClick={() => {
            setDisclaimer(true);
            setClose(true);
          }}
        >
          Got it!
        </button>
      </div>
    </Banner>
  );
}
