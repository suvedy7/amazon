import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const[{ basket } ] = useStateValue();

  console.log(basket.length);
  
  return (
    <nav className="header">
      {/*logo on the left*/}
      <Link to="/">
        <img className="header__logo" alt="" />
      </Link>

      {/* Search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/*  3 links*/}
      <div className="header__nav">
        {/* 1st Link */}

        <Link to="/about" className="header__link">
          <div className="header__option">
            <span>ABOUT</span>
            <span>US</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/contact" className="header__link">
          <div className="header__option">
            <span>CONTACT</span>
            <span>US</span>
          </div>
        </Link>
        {/* 3rd Link */}

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header_-optionLineOne">Hello,</span>
            <span className="header_-optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Notification bell icon*/}
            <ShoppingBasketIcon />
            {/* Number of items in the basket*/}
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Notification icon with number*/}
    </nav>
  );
}

export default Header;
