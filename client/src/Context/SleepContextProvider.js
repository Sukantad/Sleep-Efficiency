import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

export const SleepContext = createContext();

function SleepContextProvider({ children }) {
  const [sleepEfficiency, setsleepEfficiency] = useState(null);

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

  async function handleDuration(hoursSlept) {
    userData.hoursSlept = hoursSlept;

    try {
      const res = await axios.post(
        "https://gray-rich-centipede.cyclic.app/sleep-data",
        userData
      );
      setsleepEfficiency(res?.data);
    } catch (error) {
      setsleepEfficiency(error?.response?.data.error);
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
        sleepEfficiency,
      }}
    >
      {children}
    </SleepContext.Provider>
  );
}

export default SleepContextProvider;
