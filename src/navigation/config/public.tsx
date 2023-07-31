import React from 'react';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { Navigate } from 'react-router-dom';

export const routes = (isLoggedIn, userRole) => {
  switch (userRole) {
    case 'user':
      return [
        { path: '/', element: <Login/> },
        { path: '/Game', element: isLoggedIn || true ? <Game /> : <Navigate to="/" /> }, // TODO fix when BAE
      ];
    default: {
      return   [
        { path: '/', element: <Login/> },
        { path: '/Game', element: isLoggedIn || true ? <Game /> : <Navigate to="/" /> }, // TODO fix when BAE
      ];
    }
  }
};
