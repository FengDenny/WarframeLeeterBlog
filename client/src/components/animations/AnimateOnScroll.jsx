import { useEffect } from "react";

const isElementInViewport = (items) => {
  let rect = items.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const AnimateOnScroll = (items, style) => {
  return useEffect(() => {
    function callbackFunc() {
      for (let i = 0; i < items?.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add(style);
        } else {
          items[i].classList.remove(style);
        }
      }
    }
    window.addEventListener("scroll", callbackFunc);
  }, [items, style]);
};
