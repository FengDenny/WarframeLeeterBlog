import { useEffect, useRef, useLayoutEffect, useState } from "react";

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

export const AnimateOnScrollObserver = ({ style, children }) => {
  const [visible, setVisible] = useState();
  const ref = useRef();

  const thresholdArray = () => {
    const threshold = [];
    for (let i = 0; i <= 1; i += 0.01) threshold.push(i);
    return threshold;
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: thresholdArray() }
    );
    observer.observe(ref.current);
  }, [setVisible]);

  return (
    <li ref={ref} className={visible ? style : null}>
      {children}
    </li>
  );
};
