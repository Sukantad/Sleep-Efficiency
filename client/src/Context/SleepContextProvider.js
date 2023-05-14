import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

export const SleepContext = createContext();

function SleepContextProvider({ children }) {
  const [sleepEfficiency, setsleepEfficiency] = useState();
  var userData = {};
  const onSubmit = (nickname, password) => {
    userData.nickname = nickname;
    userData.password = password;
  };
  const handleStruggleDuration = (dur) => {
    userData.struggleDuration = dur;
  };

  function bedTimeHandler(sleepTime) {
    userData.sleepTime = sleepTime;
  }
  function handleWakeup(wakeTime) {
    userData.wakeTime = wakeTime;
  }
  let nickname = "";
  async function handleDuration(hoursSlept) {
    userData.hoursSlept = hoursSlept;
    try {
      const res = await axios.post(
        "http://localhost:5000/sleep-data",
        userData
      );
      nickname = userData.nickname;
      console.log(res.data.efficiency, "res");

      console.log(nickname, "ng");
      setsleepEfficiency(res?.data.efficiency);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SleepContext.Provider
      value={{
        onSubmit,
        handleStruggleDuration,
        bedTimeHandler,
        handleWakeup,
        handleDuration,
        nickname
      }}
    >
      {children}
    </SleepContext.Provider>
  );
}

export default SleepContextProvider;
