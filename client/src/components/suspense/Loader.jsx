import React, { Suspense } from "react";
import { Spinner } from "./Spinner";

export default function Loader({ children, style }) {
  return <Suspense fallback={<Spinner style={style} />}>{children}</Suspense>;
}
