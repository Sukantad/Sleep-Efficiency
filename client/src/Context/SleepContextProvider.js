import React, { createContext, useState, ReactNode } from "react";
  import axios from 'axios'

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

  async function handleDuration(hoursSlept) {
    userData.hoursSlept = hoursSlept;
    const res = await axios.post("http://localhost:5000/sleep-data", userData);
    console.log(res.data.efficiency, "res  ");
    setsleepEfficiency(res?.data.efficiency);
  }

  return (
    <SleepContext.Provider
      value={{
        onSubmit,
        handleStruggleDuration,
        bedTimeHandler,
        handleWakeup,
        handleDuration,
      }}
    >
      {children}
    </SleepContext.Provider>
  );
}

export default SleepContextProvider;
