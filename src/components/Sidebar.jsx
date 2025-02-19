import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaTh,
  FaShoppingCart,
  FaClipboardList,
  FaInfoCircle,
} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import "../assets/styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaCalendarAlt /> Plan
          </Link>
        </li>
        <li>
          <Link to="/recipe-list">
            <FaTh /> All recipes
          </Link>
        </li>
        <li>
          <FaShoppingCart /> Groceries List
        </li>
        <Link to="/add-recipe">
          <li>
            <IoMdAddCircle /> Add Recipe
          </li>
        </Link>
        <Link to="/mealplan">
          <li>
            <FaClipboardList /> Groceries Management
          </li>
        </Link>
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
