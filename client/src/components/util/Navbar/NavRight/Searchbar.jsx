import React from "react";
import navbarStyles from "../../../../scss/util/Navbar/navbar.module.scss";
import mobileStyles from "../../../../scss/util/Navbar/mobileNavbar.module.scss";
import { FaSearch } from "react-icons/fa";
export default function Searchbar({ mobile }) {
  return (
    <form
      className={`${
        mobile
          ? mobileStyles.searchbarContainer
          : navbarStyles.searchbarContainer
      }`}
      id='form-search'
    >
      <input
        type='search'
        name='search'
        placeholder='Two Sum'
        aria-label='Search solutions by title'
        results='5'
        className={`${
          mobile ? mobileStyles.searchbar : navbarStyles.searchbar
        }`}
      />
      <div
        className={`${
          mobile ? mobileStyles.btnContainer : navbarStyles.btnContainer
        }`}
      >
        <button
          className={`${
            mobile ? mobileStyles.searchBtn : navbarStyles.searchBtn
          }`}
        >
          <FaSearch
            className={`${
              mobile ? mobileStyles.faSearch : navbarStyles.faSearch
            }`}
          />
        </button>
      </div>
    </form>
  );
}
