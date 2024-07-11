import React, { useState } from 'react';
import logo from '../assets/logoNegro.png';
import fondologin from '../assets/fondo.jpg';

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${fondologin})` }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-40 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 rounded-2xl"
          />
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-2xl shadow-sm">
            {isRegistering && (
              <>
                <div>
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="First Name"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="Phone"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="userType" className="sr-only">User Type</label>
                  <input
                    id="userType"
                    name="userType"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="User Type"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="referralId" className="sr-only">Referral ID</label>
                  <input
                    id="referralId"
                    name="referralId"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="Referral ID"
                  />
                </div>
              </>
            )}
            <div className={isRegistering ? "mt-3" : ""}>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                placeholder="Email"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                placeholder="Password"
              />
            </div>
            {isRegistering && (
              <div className="mt-3">
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                  placeholder="Confirm Password"
                />
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-red_treas focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-black"
            >
              {isRegistering ? 'Register' : 'Log In'}
            </button>
          </div>
        </form>
        <div className="text-center">
          {isRegistering ? (
            <a href="#" onClick={toggleForm} className="text-sm text-bg-black hover:text-red_treas">
              Already have an account? <span className="text-red_treas">Log In</span>
            </a>
          ) : (
            <a href="#" onClick={toggleForm} className="text-sm text-bg-black hover:text-red_treas">
              <span className="text-white">No tienes cuenta?</span> <span className="text-red_treas">Registrate</span>
            </a>
          )}
        </div>
        {!isRegistering && (
          <div className="text-center">
            <a href="#" className="text-sm text-bg-black hover:text-red_treas">
              ¿ Olvidaste tu contraseña ?
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
