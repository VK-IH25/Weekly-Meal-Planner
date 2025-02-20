import React from "react";
import { Link } from "react-router-dom";
import { FaTh, FaShoppingCart, FaInfoCircle, FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import "../assets/styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/recipe-list">
            <FaTh /> All recipes
          </Link>
        </li>
        <li>
          <Link to="/add-recipe">
            <IoMdAddCircle /> Add Recipe
          </Link>
        </li>
        <li>
          <Link to="/mealplan">
            <FaShoppingCart /> Groceries List
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle /> About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
