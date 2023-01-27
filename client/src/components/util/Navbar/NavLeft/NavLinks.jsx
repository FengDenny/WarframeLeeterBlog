import React from "react";
import navbarStyles from "../../../../scss/Navbar/navbar.module.scss";
import globalStyles from "../../../../scss/global/global.module.scss";
import { Link } from "react-router-dom";
import mobileStyles from "../../../../scss/Navbar/mobileNavbar.module.scss";

import { links } from "../../../../Model/Navbar/NavLinks";
import ActiveNavLink from "../../../../View/utils/Navbar/ActiveNavLink";

export default function NavLinks({ mobile }) {
  const { active, handleActiveClicked } = ActiveNavLink();
  return (
    <ul
      className={`${
        mobile ? mobileStyles.navLinksContainer : globalStyles.dFlexRow
      }`}
    >
      {links.map((link) => {
        const { name, ahref, id } = link;
        return (
          <li
            onMouseEnter={() => handleActiveClicked(id)}
            key={id}
            className={`${
              mobile ? mobileStyles.navLinks : navbarStyles.navLinks
            }
            
            ${active === id ? globalStyles.active : null}
            `}
          >
            <Link
              to={ahref}
              className={`${globalStyles.whiteFontColor} ${
                active === id && globalStyles.fromLeft
              }`}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
