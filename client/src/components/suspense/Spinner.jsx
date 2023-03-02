import { FaSpinner } from "react-icons/fa";

import loaderStyles from "../../components/suspense/loader.module.scss";

export const Spinner = () => <FaSpinner className={loaderStyles.loadingIcon} />;
