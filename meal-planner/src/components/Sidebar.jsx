import React from "react";
import "../assets/styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>Plan</li>
        <li>Groceries List</li>
        <li>Add Recipe</li>
        <li>Groceries Management</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
