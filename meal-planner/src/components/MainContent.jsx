import React from "react";
import { Flex, Table, Title, ScrollArea } from "@mantine/core";
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
    setDragging(true);}

    const handleDrop = function (ev) {
      ev.preventDefault();
      let data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    

      setDragging(false);
    }


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
                      
                      style={{border:"1px solid gray", padding:"10px", borderRadius: "8px"}}>
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
                <tr key={mealTime} style={{ height: "150px" }}>
                  <td>{mealTime}</td>
                  {daysOfWeek.map((day) => (
                    <td key={day}
                      id={`${day}${mealTime}`}
                      onDrop={handleDrop}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                      onDragEnter={handleDragEnter}
                    >
                     
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