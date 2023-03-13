import React, { useState } from "react";
import mobileStyles from "../../../../scss/util/Navbar/mobileNavbar.module.scss";
import Searchbar from "../../Searchbar/Searchbar";
import NavLinks from "../NavLeft/NavLinks";
import { links } from "../../../../Model/NavLinks";
export default function MobileMenu({ show }) {
  const [searchTitle, setSearchTitle] = useState();
  return (
    <div
      className={`${mobileStyles.mobileNavContainer} ${
        show ? mobileStyles.open : null
      }`}
    >
      <div className={mobileStyles.mobileSearchbar}>
        <Searchbar
          mobile
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
        />
      </div>
      <NavLinks mobile link={links} />
    </div>
  );
}
