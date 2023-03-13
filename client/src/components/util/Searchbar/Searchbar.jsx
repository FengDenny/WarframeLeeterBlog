import React from "react";
import navbarStyles from "../../../scss/util/Navbar/navbar.module.scss";
import mobileStyles from "../../../scss/util/Navbar/mobileNavbar.module.scss";
import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../redux/slice/SearchTitleSlice.js";

export default function Searchbar({
  mobile,
  style,
  btnStyle,
  searchTitle,
  setSearchTitle,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <form
      className={`${style} ${
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
        onChange={(e) => {
          setSearchTitle(e.target.value);
          dispatch(searchAction.searchTitle(e.target.value));
        }}
      />
      <div
        className={`${
          mobile ? mobileStyles.btnContainer : navbarStyles.btnContainer
        } ${btnStyle}`}
      >
        <button
          className={`${
            mobile ? mobileStyles.searchBtn : navbarStyles.searchBtn
          }`}
          onClick={() => {
            navigate("/solutions");
            dispatch(searchAction.searchTitle(searchTitle));
          }}
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
