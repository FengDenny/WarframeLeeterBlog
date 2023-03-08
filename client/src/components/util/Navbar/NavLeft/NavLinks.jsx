import React from "react";
import navbarStyles from "../../../../scss/util/Navbar/navbar.module.scss";
import globalStyles from "../../../../scss/global/global.module.scss";
import { Link } from "react-router-dom";
import mobileStyles from "../../../../scss/util/Navbar/mobileNavbar.module.scss";

import ActiveNavLink from "../../../../Controller/utils/Navbar/ActiveNavLink";

export default function NavLinks({ mobile, link, footer }) {
  const { active, handleActiveClicked } = ActiveNavLink();
  return (
    <ul
      className={`${
        mobile ? mobileStyles.navLinksContainer : globalStyles.dFlexRow
      }`}
    >
      {footer
        ? link &&
          link.map((link) => {
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
                <a
                  href={ahref}
                  className={`${globalStyles.whiteFontColor} ${
                    active === id && globalStyles.fromLeft
                  }`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {name}
                </a>
              </li>
            );
          })
        : link &&
          link
            .filter((link) => link.id < 4)
            .map((link) => {
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
