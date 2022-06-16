import React from "react";
import "../../main-area.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import NewOrderPage from "../pages/NewOrderPage";
import RegisterPage from "../pages/login/RegisterPage";
import PasswordReset from "../pages/login/PasswordReset";
import { useGlobalContext } from "../../context";
import RequireAuth from "../RequireAuth";
import PersistLogin from "../PersistLogin";

import LoginPage from "../pages/login/LoginPage";
const WorkArea = () => {
  const { user } = useGlobalContext();
  return (
    <div className="main-workarea">
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/myorders" element={<MyOrdersPage />} />
            <Route path="/neworder" element={<NewOrderPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};

export default WorkArea;
