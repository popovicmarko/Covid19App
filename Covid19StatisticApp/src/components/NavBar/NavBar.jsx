import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div className="NavBar">
      <Link
        className={`nav ${location.pathname === "/" ? "active" : ""}`}
        to="/"
      >
        STATISTIC
      </Link>
      <Link
        className={`nav ${location.pathname === "/team" ? "active" : ""}`}
        to="/team"
      >
        TEAM
      </Link>
    </div>
  );
}

export default NavBar;
