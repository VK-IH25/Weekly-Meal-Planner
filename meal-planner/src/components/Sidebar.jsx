import React from "react";
import "../assets/styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <Link to="/">
          <li>Plan</li>
        </Link>
        <Link to="/recipe-list">
          <li>All recipes</li>
        </Link>
        <li>Groceries List</li>
        <li>Add Recipe</li>
        <li>Groceries Management</li>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
