import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="NavBar">
      <Link className="nav" to = '/'>STATISTIC</Link>
      <Link className="nav" to="/team">TEAM</Link>
    </div>
  )
}
export default NavBar;