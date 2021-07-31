import React, { useState } from "react";

const Context = React.createContext();

export default Context;

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export function Auth({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const logger = {
    loggedIn: loggedIn,
    loading: loading,
    // login: () => {
    //   setLoading(true);
    //   wait(1000).then(() => {
    //     setLoading(false);
    //     setLoggedIn(true);
    //   });
    // },
    // logout: () => {
    //   setLoading(true);
    //   wait(1000).then(() => {
    //     setLoading(false);
    //     setLoggedIn(false);
    //   });
    // },
    //want to toggle login/logout with loading
    toggleLogin: () => {
      setLoading(true);
      wait(1000).then(() => {
        setLoading(false);
        setLoggedIn(!loggedIn);
      });
      //want to toggle login/logout without loading
      //   setLoggedIn(!loggedIn);
    },
  };

  return <Context.Provider value={logger}>{children}</Context.Provider>;
}
