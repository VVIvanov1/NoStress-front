import React, { useState, useContext } from "react";
import data from "./orders-data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(
    window.localStorage.getItem("language") || "Ru"
  );

  const activeLangStyle = { background: "#00b0c7" };
  const langs = ["Kz", "Ru", "En"];
  const [showLink, setShowLinks] = useState(false);
  const [expand, setExpand] = useState(false);
  const [user, setUser] = useState(null);
  const [newOrders, setNewOrders] = useState(false);
  const [notAssigned, setNotAssigned] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [sharedPage, setSharedPage] = useState({});
  const [sharedUser, setSharedUser] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const myProfile = {
    myCurrentOrders: 17,
    myClosedOrders: 154,
  };
  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        showTooltip,
        setShowTooltip,
        data,
        sharedPage,
        setSharedPage,
        showShareModal,
        setShowShareModal,
        sharedUser,
        setSharedUser,
        notAssigned,
        setNotAssigned,
        newOrders,
        setNewOrders,
        user,
        lang,
        langs,

        activeLangStyle,
        setLang,
        showLink,
        setShowLinks,
        myProfile,
        expand,
        setExpand,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
