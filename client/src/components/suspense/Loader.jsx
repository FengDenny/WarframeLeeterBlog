import React, { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

import loaderStyles from "./loader.module.scss";

export default function Loader({ children }) {
  return (
    <Suspense fallback={<FaSpinner className={loaderStyles.loadingIcon} />}>
      {children}
    </Suspense>
  );
}
