// Context.js
import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  const updateUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    const event = new CustomEvent("currentUserUpdated", {
      detail: user,
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("currentUserUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("currentUserUpdated", handleStorageChange);
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContext;
