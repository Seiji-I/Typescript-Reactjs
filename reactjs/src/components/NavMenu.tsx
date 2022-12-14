import React from "react";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="/">Index</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}

export default NavMenu;