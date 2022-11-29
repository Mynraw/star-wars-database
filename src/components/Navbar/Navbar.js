import React from "react";
import StarWarsLogo from "../../images/star-wars-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="hamburger-container">
        <button className="hamburger">
          {/* icon from heroicons.com */}
          {/* <img src={DeathStar} alt="imp logo" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffe818"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>
      <div className="img-container">
        <a href={"sw"}>
          <img src={StarWarsLogo} alt=""></img>
        </a>
      </div>
      <nav className="nav-link">
        <ul>
          <li>
            <a href={"s"}>SW API</a>
          </li>
          <li>
            <a href={"s"}>About Dev</a>
          </li>
          <li>
            <a href={"s"}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
