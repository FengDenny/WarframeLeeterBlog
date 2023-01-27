import navbarStyles from "../../../../scss/Navbar/navbar.module.scss";
import { useSelector } from "react-redux";
export default function NavLogo() {
  const { themeData } = useSelector((state) => ({ ...state }));

  const { toggled } = themeData;

  return !toggled ? (
    <img
      src={require("../../../../images/badge_logo/white_badge.png")}
      alt='white-logo'
      className={navbarStyles.logo}
    />
  ) : (
    <img
      src={require("../../../../images/badge_logo/colored_badge.png")}
      alt='colored-logo'
      className={navbarStyles.logo}
    />
  );
}
