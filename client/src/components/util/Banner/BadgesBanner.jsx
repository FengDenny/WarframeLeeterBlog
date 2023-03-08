import React from "react";

import { badgesData } from "../../../Controller/queries/badges/Badges";

import SolutionLayout from "../../../components/layouts/section/SectionLayout";
import bannerStyles from "../../../scss/Section/SectionLayout.module.scss";
import { lcWebURL } from "../../../Controller/endpoint";

import { AnimateOnScrollObserver } from "../../../components/animations/AnimateOnScroll";
import Banner from "./Banner";
import bannerStyle from "../../../scss/util/Banner/Banner.module.scss";

export default function BadgesBanner() {
  const { badges, upcoming } = badgesData();

  return (
    <SolutionLayout style={bannerStyles.bannerSection}>
      <Banner
        style={`${bannerStyles.icons} ${bannerStyle.badgeBannerContainer}`}
      >
        {upcoming &&
          upcoming.map((items, index) => (
            <AnimateOnScrollObserver style={bannerStyles.inView} key={index}>
              <img src={lcWebURL(items.icon)} alt={items.name} key={index} />
            </AnimateOnScrollObserver>
          ))}
        {badges &&
          badges
            .filter((item) => item.name === "Annual Badge")
            .map((item) => (
              <AnimateOnScrollObserver
                style={bannerStyles.inView}
                key={item.id}
              >
                <>
                  <img src={item.icon} alt={item.name} key={item.id} />
                </>
              </AnimateOnScrollObserver>
            ))}
      </Banner>
    </SolutionLayout>
  );
}
