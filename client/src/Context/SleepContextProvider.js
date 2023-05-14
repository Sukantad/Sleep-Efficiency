import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

export const SleepContext = createContext();

function SleepContextProvider({ children }) {
  const [nickname, setNickname] = useState();
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

  let password = "123456";
  async function handleDuration(hoursSlept) {
    userData.hoursSlept = hoursSlept;
    setNickname([
      { nickname: userData.nickname },
      {
        password: userData.password,
      },
    ]);

    try {
      await axios.post("http://localhost:5000/sleep-data", userData);

      //  console.log(res.data.efficiency, "res");

      // setsleepEfficiency(res?.data.efficiency);
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
        nickname,
        password,
      }}
    >
      {children}
    </SleepContext.Provider>
  );
}

export default SleepContextProvider;
