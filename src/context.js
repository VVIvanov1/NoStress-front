import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("Ru");
  const currentUser = { email: "meruyert@baigroupkz.com" };
  const activeLangStyle = { background: "#00b0c7" };
  const langs = ["Kz", "Ru", "En", "Uz"];
  const [showLink, setShowLinks] = useState(false);
  const [expand, setExpand] = useState(false);
  const [user, setUser] = useState(null);
  const [newOrders, setNewOrders] = useState(false);
  const [notAssigned, setNotAssigned] = useState(false);
  const myProfile = {
    myCurrentOrders: 17,
    myClosedOrders: 154,
  };
  return (
    <AppContext.Provider
      value={{
        notAssigned,
        setNotAssigned,
        newOrders,
        setNewOrders,
        user,
        lang,
        langs,
        currentUser,
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
