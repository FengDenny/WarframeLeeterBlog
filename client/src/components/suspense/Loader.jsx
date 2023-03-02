import React, { Suspense } from "react";
import { Spinner } from "./Spinner";

export default function Loader({ children }) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}
