import { useRef, useLayoutEffect, useState } from "react";

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
export const AnimateSpanOnScrollObserver = ({
  style,
  children,
  notVisible,
}) => {
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
    <span ref={ref} className={visible ? style : notVisible}>
      {children}
    </span>
  );
};
