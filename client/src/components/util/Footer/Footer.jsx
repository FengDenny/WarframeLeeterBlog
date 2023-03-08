import React from "react";
import NavLinks from "../Navbar/NavLeft/NavLinks";
import NavLogo from "../Navbar/NavLeft/NavLogo";
import globalStyles from "../../../scss/global/global.module.scss";
import footerStyles from "../../../scss/util/Footer/footer.module.scss";

import { links } from "../../../Model/NavLinks";

export default function Footer({ style, copyright }) {
  return (
    <footer className={`${globalStyles.container} ${style}`}>
      <div className={`${footerStyles.container} ${footerStyles.footer}`}>
        <NavLogo />
        <span>{copyright}</span>
        <NavLinks link={links} footer />
      </div>
    </footer>
  );
}
