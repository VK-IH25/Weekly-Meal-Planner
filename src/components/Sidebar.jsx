import React from "react";
import { Link } from "react-router-dom";
import { FaTh, FaShoppingCart, FaInfoCircle, FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import "../assets/styles/Sidebar.css";
import { FaCalendarAlt } from "react-icons/fa";


const Sidebar = (props) => {


  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/" onClick={ props.toggleDesktop}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/planner" onClick={ props.toggleDesktop}>
          <FaCalendarAlt />           Weekly Planner
          </Link>
        </li>
        <li>
          <Link to="/recipe-list" onClick={ props.toggleDesktop}>
            <FaTh /> All recipes
          </Link>
        </li>
        <li>
          <Link to="/add-recipe" onClick={ props.toggleDesktop}>
            <IoMdAddCircle /> Add Recipe
          </Link>
        </li>
        <li>
          <Link to="/mealplan" onClick={ props.toggleDesktop}>
            <FaShoppingCart /> Groceries List
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={ props.toggleDesktop}> 
            <FaInfoCircle /> About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
