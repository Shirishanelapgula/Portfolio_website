import "./App.css";

import themeContext from "./themeContext/themeContext";
import { useState } from "react";

import Home from "./components/Home";

function App() {
  const [isDarkMode, setToggleDarkMode] = useState(false);

  const localStorageValue = JSON.parse(localStorage.getItem("isDarkMode"));

  console.log(localStorageValue);
  if (localStorageValue !== null && localStorageValue !== isDarkMode) {
    setToggleDarkMode(localStorageValue);
  }

  const toggleDarkMode = () => {
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
    setToggleDarkMode((prevDarkMode) => !prevDarkMode);
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
