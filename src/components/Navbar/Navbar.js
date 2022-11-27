import React from "react";
import StarWarsLogo from "../../images/star-wars-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
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
