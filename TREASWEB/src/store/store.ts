// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'; // Asume que tienes un slice para manejar la autenticación

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(), // Puedes agregar middleware adicional aquí
});

export default store;
