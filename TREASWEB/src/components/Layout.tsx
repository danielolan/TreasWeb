import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Asegúrate de que el Sidebar esté correctamente importado

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Outlet />  
      </div>
    </div>
  );
};

export default Layout;
