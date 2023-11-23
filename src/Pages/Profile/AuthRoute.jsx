import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Login from '../Login/Login';
export const AuthRoute = () => {
    return (
      <Routes>
            <Route index element={<Login/>}></Route>
      </Routes>
    );
}


