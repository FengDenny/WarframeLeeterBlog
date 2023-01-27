import navbarStyles from "../../../../scss/Navbar/navbar.module.scss";

export default function NavLogo() {
  return (
    <img
      src={require("../../../../images/badge_logo/white_badge.png")}
      alt='white-logo'
      className={navbarStyles.logo}
    />
  );
}
