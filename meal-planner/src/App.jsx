import React from "react";
import "./App.css";
import { MantineProvider, AppShell } from "@mantine/core";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <MantineProvider theme={{ colorScheme: "light" }}>
      <AppShell>
        <Header />
        <div className="content">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </AppShell>
    </MantineProvider>
  );
};

export default App;
