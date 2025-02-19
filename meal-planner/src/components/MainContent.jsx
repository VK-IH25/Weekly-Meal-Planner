import React from "react";
import { Flex, Table, Title, ScrollArea, Input, Button, CloseButton } from "@mantine/core";
import "../assets/styles/MainContent.css";
import RecipeCards from "./RecipeCards";
import { useState } from "react";

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

  const [mealPlan, setMealPlan] = useState({})

  const getRecipeName = (id) => {
    return props.recipeList.find((r) => r.idMeal === id).strMeal
  }

  // Function to clear recipe from meal plan
  const clearRecipe = (day, mealTime, recipeId) => {
    setMealPlan((prev) => {
      const key = `${day}-${mealTime}`;
      const updatedRecipes = prev[key]?.filter((id) => id !== recipeId) || [];
      if (updatedRecipes.length === 0) {
        // Remove the key entirely if no recipes remain
        const { [key]: _, ...newMealPlan } = prev;
        return newMealPlan;
      }
      return { ...prev, [key]: updatedRecipes };
    });
  };



  //Drag and Drop
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  }

  const handleDrop = (ev, day, mealTime) => {
    ev.preventDefault();
    const recipeId = ev.dataTransfer.getData("text");
    const key = `${day}-${mealTime}`;

    setMealPlan((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), recipeId], // Append new recipe ID to existing array
    }));
  

    setDragging(false);
  }

  //search bar
  const [query, setQuery] = useState("");

  const filteredList = props.recipeList.filter((recipe) =>
    Object.values(recipe).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(query.toLowerCase())
    )
  );



  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="row"
    >

      <div>
        <ScrollArea h={500} id="origin"
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          bg={'var(--mantine-color-blue-light)'}

          style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
          <Input
            placeholder="Search"
            value={query}
            mb="20px"
            onChange={(event) => setQuery(event.target.value)}
          />
          <RecipeCards recipeList={filteredList}></RecipeCards>
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
              <tr key={mealTime} style={{ height: "150px" }}>
                <td>{mealTime}</td>
                {daysOfWeek.map((day) => (
                  <td
                    key={day}
                    id={`${day}${mealTime}`}
                    onDrop={(ev) => handleDrop(ev, day, mealTime)}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                  >
                    {mealPlan[`${day}-${mealTime}`]?.map((recipeId) => (
                      <div key={recipeId} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                        {getRecipeName(recipeId)}
                        <CloseButton
                          size="xs"
                          style={{ marginLeft: "5px" }}
                          onClick={() => clearRecipe(day, mealTime, recipeId)}
                        />
                      </div>
                    ))}
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


export default MainContent