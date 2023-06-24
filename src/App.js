import "./App.css";

import themeContext from "./themeContext/themeContext";
import { useState, useEffect } from "react";

import Home from "./components/Home";

function App() {
  const [isDarkMode, setToggleDarkMode] = useState(false);

  useEffect(() => {
    console.log("HI");
    setToggleDarkMode(localStorage.getItem("isDarkMode"));
  }, []);

  const toggleDarkMode = () => {
    setToggleDarkMode((prevDarkMode) => !prevDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  return (
    <themeContext.Provider
      value={{ isDarkMode, onToggleDarkMode: toggleDarkMode }}
    >
      <Home />
    </themeContext.Provider>
  );
}

export default App;
