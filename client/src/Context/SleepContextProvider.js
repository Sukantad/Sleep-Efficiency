import React, { createContext, useState, ReactNode } from "react";

export const SleepContext = createContext();

function SleepContextProvider({ children }) {
  const [sleepEfficiency, setsleepEfficiency] = useState();
  var userData = {};
  const onSubmit = (nickname, password) => {
    userData.nickname = nickname;
    userData.password = [password];
  };

  return (
    <SleepContext.Provider value={{ onSubmit }}>
      {children}
    </SleepContext.Provider>
  );
}

export default SleepContextProvider;
