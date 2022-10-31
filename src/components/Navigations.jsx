import React from "react";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <>
      <ul className="nav-unordered-list">
      <li>
          <Link to="/" style={{color: "green", fontSize: 20}}>LaunchPad</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/universities">Universities</Link>
        </li>
        <li>
          <Link to="/postalLookup">Postal lookup</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigations;
