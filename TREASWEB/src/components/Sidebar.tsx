import React, { useState } from 'react';
import { IoMdSearch, IoIosStats, IoIosPeople, IoIosImages, IoIosChatbubbles ,IoIosAddCircle } from 'react-icons/io';
import { MdDashboard, MdOutlineReport, MdMenu } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);  // Estado para controlar la apertura

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className={`bg-indigo-800 text-white ${isOpen ? 'w-64' : 'w-16'} h-full transition-width duration-300 ease-in-out fixed  z-30`}>
      <div className="flex items-center justify-between p-5">
        <button onClick={toggleSidebar}>
          <MdMenu className="text-2xl"/>
        </button>
        {isOpen && <span>Hola Daniel</span>}
      </div>
      <div className={`flex items-center ${isOpen ? 'justify-start' : 'justify-center'} p-3`}>
        <IoMdSearch className="text-xl"/>
        {isOpen && <input type="text" placeholder="Search" className="bg-indigo-900 h-10 px-4 ml-2 rounded-lg text-sm focus:outline-none w-full"/>}
      </div>
      <ul>
        <li className="flex justify-center items-center p-4 hover:bg-indigo-700">
          <Link to="/" className="flex">
            <MdDashboard className="text-xl"/>
            {isOpen && <span className="ml-2">Dashboard</span>}
          </Link>
        </li>
        <li className="flex justify-center items-center p-4 hover:bg-indigo-700">
          <Link to="/" className="flex">
            <IoIosStats className="text-xl"/>
            {isOpen && <span className="ml-2">Hisorial de Reservas</span>}
          </Link>
        </li>
        <li className="flex justify-center items-center p-4 hover:bg-indigo-700">
          <Link to="/contact" className="flex">
            <IoIosAddCircle  className="text-xl"/>
            {isOpen && <span className="ml-2">Añadir Reservas</span>}
          </Link>
        </li>
        <li className="flex justify-center items-center p-4 hover:bg-indigo-700">
          <Link to="/bookingCorp" className="flex">
            <IoIosAddCircle  className="text-xl"/>
            {isOpen && <span className="ml-2">Reservas Corporativas</span>}
          </Link>
        </li>
    </ul>
    </div>
  );
};

export default Sidebar;
