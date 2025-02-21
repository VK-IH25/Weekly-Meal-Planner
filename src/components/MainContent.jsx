import React, { useEffect } from "react";
import {
  Table,
  Title,
  ScrollArea,
  Input,
  CloseButton,
  Container,
  Grid,
  Paper,
  Button,
  Flex,
} from "@mantine/core";
import "../assets/styles/MainContent.css";
import RecipeCards from "./RecipeCards";
import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const getRecipeName = (id) => {
    return (
      props.recipeList.find((r) => r.idMeal === id)?.strMeal || "Unknown Recipe"
    );
  };

  // Function to remove a specific recipe from meal plan
  const clearRecipe = (day, mealTime, recipeId) => {
    props.setMealPlan((prev) =>
      prev.filter(
        (meal) =>
          !(
            meal.day === day &&
            meal.mealTime === mealTime &&
            meal.recipeId === recipeId
          )
      )
    );
  };

  const clearBoard = () => {
    props.setMealPlan([]);
  };

  //Drag and Drop

  const preventDefaultBehavior = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
    console.log(e);
  };

  const handleDrop = (ev, day, mealTime) => {
    ev.preventDefault();
    const recipeId = ev.dataTransfer.getData("text");

    props.setMealPlan((prev) => {
      const updatedMealPlan = [...prev, { day, mealTime, recipeId }];
      localStorage.setItem("mealPlan", JSON.stringify(updatedMealPlan)); // Atualiza localStorage aqui
      return updatedMealPlan;
    });
  };

  //search bar
  const [query, setQuery] = useState("");

  const filteredList = props.recipeList.filter((recipe) =>
    Object.values(recipe).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <Container size="xxl" px="md" mt={20}>
      <Grid gutter="md" align="stretch">
        <Grid.Col span={{ base: 12, sm: 2 }}>
          <Paper p="md" h="100%" bg={"var(--platinum)"}>
            <ScrollArea
              h={500}
              id="origin"
              onDrop={handleDrop}
              onDragLeave={preventDefaultBehavior}
              onDragOver={preventDefaultBehavior}
              onDragEnter={preventDefaultBehavior}
              bg={"var(--oxford-blue)"}
              style={{
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Input
                placeholder="Search"
                value={query}
                mb="20px"
                rightSection={<FaSearch />}
                onChange={(event) => setQuery(event.target.value)}
              />
              <RecipeCards recipeList={filteredList}></RecipeCards>
            </ScrollArea>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 10 }}>
          <Paper p="md" h="100%" bg={"var(--platinum)"}>
            <Flex justify="space-between" align="center">
              <Title order={3} c={"var(--oxford-blue)"}>
                Weekly Meal Planner
              </Title>
              <Flex gap="sm">
                <Button
                  size="compact-md"
                  variant="outline"
                  color={"var(--oxford-blue)"}
                  onClick={() => navigate("/mealplan")}
                >
                  <FaShoppingCart />
                </Button>

                <Button
                  size="compact-md"
                  variant="outline"
                  color={"var(--oxford-blue)"}
                  onClick={clearBoard}
                >
                  <TbReload />
                </Button>
              </Flex>
            </Flex>

            <ScrollArea>
              <Table
                striped
                highlightOnHover
                withColumnBorders
                className={"meal-table"}
              >
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
                          onDragLeave={preventDefaultBehavior}
                          onDragOver={preventDefaultBehavior}
                          onDragEnter={preventDefaultBehavior}
                        >
                          {props.mealPlan
                            .filter(
                              (meal) =>
                                meal.day === day && meal.mealTime === mealTime
                            ) // Filter meals for the current cell
                            .map((meal) => (
                              <div
                                key={meal.recipeId}
                                id={meal.recipeId}
                                draggable="true"
                                onDragStart={handleDragStart}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "5px",
                                }}
                              >
                                <Link
                                  id={meal.recipeId}
                                  to={`/recipe/${meal.recipeId}`}
                                >
                                  {getRecipeName(meal.recipeId)}
                                </Link>
                                <CloseButton
                                  size="xs"
                                  style={{ marginLeft: "5px" }}
                                  onClick={() =>
                                    clearRecipe(day, mealTime, meal.recipeId)
                                  }
                                />
                              </div>
                            ))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default MainContent;
