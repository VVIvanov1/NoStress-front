import "./App.css";
import "./Header.css";
import "./main-page.css";
import Header from "./components/Header/Header";
import WorkArea from "./components/Header/WorkArea";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Router>
          <Header />
          <WorkArea />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
