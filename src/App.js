import "./App.css";
import "./Header.css";
import "./main-page.css";
import Header from "./components/Header/Header";
import WorkArea from "./components/Header/WorkArea";
import React from "react";

function App() {
  return (
    <div className="container">
      <Header />
      <WorkArea />
    </div>
  );
}

export default App;
