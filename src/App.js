import React, { createContext, useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Search from "./components/search/Search";
import Body from "./components/body/Body";
export const appContext = createContext();
const App = () => {
  const [data, setData] = useState(null);
  const [moon, setMoon] = useState(false);

  return (
    <appContext.Provider value={{ data, setData, moon, setMoon }}>
      <div
        className="appDiv"
        style={{ backgroundColor: moon ? "black" : "white" }}
      >
        <Header />
        <Search />
        <Body />
      </div>
    </appContext.Provider>
  );
};

export default App;
