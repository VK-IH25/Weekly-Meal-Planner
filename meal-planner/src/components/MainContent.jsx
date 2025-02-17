import React from "react";
import { Table } from "@mantine/core";
import "../assets/styles/MainContent.css";

const MainContent = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const mealTimes = ["Breakfast", "Lunch", "Dinner"];

  const mealPlan = {
    Monday: ["Eggs", "Grilled Chicken", "Pasta"],
    Tuesday: ["Oatmeal", "Salad", "Steak"],
    Wednesday: ["Pancakes", "Soup", "Fish"],
    Thursday: ["Yogurt", "Burger", "Vegetables"],
    Friday: ["Toast", "Pasta", "Pizza"],
    Saturday: ["Cereal", "Sushi", "Burgers"],
    Sunday: ["Smoothie", "BBQ", "Tacos"],
  };

  return (
    <section className="main-content">
      <h1>Weekly Meal Planner</h1>

      <Table striped highlightOnHover className="meal-table">
        <thead>
          <tr>
            <th>Meal Time</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mealTimes.map((mealTime) => (
            <tr key={mealTime}>
              <td>{mealTime}</td>
              {daysOfWeek.map((day) => (
                <td key={day}>
                  {mealPlan[day]
                    ? mealPlan[day][mealTimes.indexOf(mealTime)]
                    : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default MainContent;
