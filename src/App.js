import "./Styles/App.css";
import "./Styles/Header.css";
import "./Styles/main-page.css";
import "./Styles/loginPage.css";
import "./Styles/main-area.css";
import "./Styles/newOrder.css";
import "./Styles/right-buttons-block.css";
import "./Styles/registerPage.css";
import "./Styles/MyOrders.css";
import Header from "./components/Header/Header";
import WorkArea from "./components/Header/WorkArea";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import socketIOClient from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = socketIOClient("http://localhost:5000", {
      transports: ["websocket"],
    });
    socket.on("message", (data) => {
      console.log(data);
    });
  }, []);

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
