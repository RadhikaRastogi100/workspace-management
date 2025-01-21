import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar: React.FC = () => {

  return (
    <div style={{padding: "20px"}} className="navbar-menu">
      <NavLink
        to="/owned-workspace"
        style={{ marginLeft: "1rem", textDecoration: "none", color: "#000" }}
      >
        Owned Workspace
      </NavLink>
      <NavLink
        to="/external-workspace"
        style={{ marginLeft: "1rem", textDecoration: "none", color: "#000" }}
      >
        External Workspace
      </NavLink>
      <NavLink
        to="/json-list"
        style={{ marginLeft: "1rem", textDecoration: "none", color: "#000" }}
      >
        Json List
      </NavLink>
    </div>
  );
};

export default Navbar;
