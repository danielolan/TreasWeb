// actions.ts
import * as actionTypes from '../interfaces/actionTypes';
import { User } from 'firebase/auth';

// Define la acción para establecer el usuario
export const setUser = (user: User) => {
  return {
    type: actionTypes.SET_USER,
    payload: user
  };
};

// Define la acción para limpiar el usuario
export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  };
};
