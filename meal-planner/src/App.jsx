import React from "react";
import "@mantine/core/styles.css";
import "./App.css";
import {
  AppShell,
  Burger,
  Group,
  Skeleton,
  Image,
  AppShellFooter,
} from "@mantine/core";
import { Routes, Route } from "react-router-dom";
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

import About from "./pages/About";

const App = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://weekly-meal-plan-4de4b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      )
      .then((r) => {
        setRecipeList(Object.values(r.data));
        // console.log(r.data)
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="xl"
    >
      <AppShell.Header>
        <Group h="150%">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
        <Link to="/">
          <Image src={logo} height={60} alt="logo" />
        </Link>{" "}
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route
            path="/"
            element={<MainContent recipeList={recipeList}></MainContent>}
          />
          <Route
            path="recipe-list"
            element={<RecipeList recipeList={recipeList}></RecipeList>}
          />
          <Route
            path="recipe/:id"
            element={<SingleRecipe recipeList={recipeList}></SingleRecipe>}
          />
          <Route path="about" element={<About></About>} />
        </Routes>
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
};

export default App;
