import "@mantine/core/styles.css";
import React from "react";
import "./App.css";
import { AppShell, Burger, Group, Image } from "@mantine/core";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { useState, useEffect } from "react";

import axios from "axios";

import MainContent from "./components/MainContent";
import logo from "./assets/img/logo-light.png";
import RecipeList from "./components/RecipeList";
import SingleRecipe from "./components/SingleRecipe";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import EditRecipe from "./components/EditRecipe";

import About from "./pages/About";
import AddRecipe from "./components/AddRecipe";
import MealPlan from "./pages/MealPlan";
import Board from "./components/Board";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import AuthDetails from "./components/auth/AuthDetails";

const App = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const [recipeList, setRecipeList] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);
  const navigate = useNavigate();

  //local storage for meal plans
  useEffect(() => {
    try {
      const history = JSON.parse(localStorage.getItem("mealPlan")) || [];
      setMealPlan(history);
    } catch (error) {
      console.error("Erro ao carregar mealPlan:", error);
      setMealPlan([]);
    }
  }, []);

  useEffect(() => {
    try {
      const history = JSON.parse(localStorage.getItem("mealPlan")) || [];
      setMealPlan(history);
    } catch (error) {
      console.error("Erro ao carregar mealPlan:", error);
      setMealPlan([]);
    }
  }, []);

  //bg color for homepage
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("special-page-bg");
    } else {
      document.body.classList.remove("special-page-bg");
    }
  }, [location.pathname]);

  useEffect(() => {
    axios
      .get(
        "https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      )
      .then((r) => {
        setRecipeList(Object.values(r.data));
      })
      .catch((e) => console.log(e));
  }, []);

  const addRecipe = (recipe) => {
    const newRecipe = { ...recipe, idMeal: Date.now().toString() };

    axios
      .post(
        "https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
        newRecipe
      )
      .then(() =>
        axios.get(
          "https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        )
      )
      .then((r) => {
        setRecipeList(Object.values(r.data));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const deleteRecipe = (key) => {
    axios
      .delete(
        `https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals/${key}.json`
      )
      .then(() =>
        axios.get(
          "https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        )
      )
      .then((r) => {
        setRecipeList(Object.values(r.data));
      })
      .then(() => {
        navigate("/recipe-list"); // Navigate after the state has been updated
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="0"
    >
      <AppShell.Header className="header">
        <Group h="300%">
          <Burger
            lineSize={3}
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
            className="burger"
          />
          <Burger
            lineSize={3}
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
            className="burger"
          />
          <Link to="/">
            <Image src={logo} height={55} alt="logo" />
          </Link>
        </Group>

        <AuthDetails></AuthDetails>
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar toggleDesktop={toggleDesktop} toggleMobile={toggleMobile} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route
            path="planner"
            element={
              <MainContent
                recipeList={recipeList}
                mealPlan={mealPlan}
                setMealPlan={setMealPlan}
              ></MainContent>
            }
          />
          <Route
            path="recipe-list"
            element={<RecipeList recipeList={recipeList}></RecipeList>}
          />
          <Route
            path="recipe/:id"
            element={
              <SingleRecipe
                recipeList={recipeList}
                deleteRecipe={deleteRecipe}
              ></SingleRecipe>
            }
          />
          <Route
            path="add-recipe"
            element={<AddRecipe addRecipe={addRecipe}></AddRecipe>}
          />
          <Route
            path="/edit-recipe/:id"
            element={
              <EditRecipe
                recipeList={recipeList}
                setRecipeList={setRecipeList}
              ></EditRecipe>
            }
          />
          <Route
            path="mealplan"
            element={
              <MealPlan mealPlan={mealPlan} recipeList={recipeList}></MealPlan>
            }
          />
          <Route path="/" element={<Board></Board>} />
          <Route path="about" element={<About></About>} />
          <Route path="signin" element={<SignIn></SignIn>} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
};

export default App;
