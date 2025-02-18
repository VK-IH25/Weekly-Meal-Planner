import React from "react";
import { Flex, Table, Title, ScrollArea } from "@mantine/core";
import "../assets/styles/MainContent.css";
import RecipeCards from "./RecipeCards";

const MainContent = (props) => {
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
    <Flex      
    mih={50}
    gap="md"
    justify="center"
    align="center"
    direction="row"
    >
    
      <div>
      <ScrollArea h={500}>
      <RecipeCards recipeList={props.recipeList}></RecipeCards> 
         </ScrollArea>
        
      </div>
      <div>
        <Title order={3}>Weekly Meal Planner</Title>
        <Table striped highlightOnHover withColumnBorders className={"meal-table"}>
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
              <tr key={mealTime} style={{height:"150px"}}>
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
      </div>

   
    </Flex>
  );
};

export default MainContent;
