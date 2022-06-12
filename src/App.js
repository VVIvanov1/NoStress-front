import "./App.css";
import "./Header.css";
import "./main-page.css";
import Header from "./components/Header/Header";
import WorkArea from "./components/Header/WorkArea";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <WorkArea />
      </Router>
    </div>
  );
}

export default App;
