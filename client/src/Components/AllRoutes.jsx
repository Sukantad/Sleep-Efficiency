import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import StruggleDuration from './StruggleDuration';
import BedtimeScreen from './BedtimeScreen';
import WakeupScreen from './WakeupScreen';
import SleepDurationScreen from './SleepDurationScreen';




function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path='/struggleduration' element={<StruggleDuration />} > </Route>
                <Route path='/bedtime' element={<BedtimeScreen />}></Route>
                <Route path='/wakeup' element={<WakeupScreen />}></Route>
                <Route path="/sleepduration" element={<SleepDurationScreen />} />
            </Routes>
        </div>
    );
}

export default AllRoutes;