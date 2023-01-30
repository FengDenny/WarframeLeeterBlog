import React from "react";

export default function Card({ styling, children }) {
  return <div className={styling}>{children}</div>;
}
