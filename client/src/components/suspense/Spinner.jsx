import { FaSpinner } from "react-icons/fa";

import loaderStyles from "../../components/suspense/loader.module.scss";

export const Spinner = ({ style }) => (
  <span className={loaderStyles.loadingIcon}>
    <FaSpinner className={style} />
  </span>
);
