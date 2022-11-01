import React from "react";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <>
      <ul className="nav-unordered-list">
        <li>
          <Link className="list-style" to="/">
            LaunchPad
          </Link>
        </li>
        <li>
          <Link className="list-style" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="list-style" to="/universities">
            Universities
          </Link>
        </li>
        <li>
          <Link className="list-style" to="/postalLookup">
            Postal lookup
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigations;
