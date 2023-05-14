import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import StruggleDuration from './StruggleDuration';




function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path='/struggleduration' element={<StruggleDuration/>} > </Route>


            </Routes>
        </div>
    );
}

export default AllRoutes;