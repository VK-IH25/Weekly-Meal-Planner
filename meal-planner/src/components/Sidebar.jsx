import React from "react";
import { Link } from "react-router-dom";
import {
  FaList,
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
            <FaList /> Plan
          </Link>
        </li>
        <li>
          <Link to="/recipe-list">
            <FaList /> All recipes
          </Link>
        </li>
        <li>
          <FaShoppingCart /> Groceries List
        </li>
        <li>
          <IoMdAddCircle /> Add Recipe
        </li>
        <li>
          <FaClipboardList /> Groceries Management
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
