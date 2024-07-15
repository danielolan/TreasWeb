import React, { useState } from 'react';
import logo from '../assets/logoNegro.png';
import fondologin from '../assets/fondo.jpg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/authSlice';

const LoginPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const navigate = useNavigate(); // Instancia de useNavigate
  const dispatch = useDispatch(); // Inicializa dispatch aquí

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);  // Manejo de la información del usuario según sea necesario
      navigate('/home');  // Navegar a la página de inicio después del registro
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));  // Actualizar el estado global
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
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
        <form onSubmit={isRegistering ? handleRegister : handleLogin}  className="mt-8 space-y-6">
          <div className="rounded-2xl shadow-sm">
            {isRegistering && (
              <>
                <div>
                  <label htmlFor="firstName" className="sr-only">Nombres</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="Nombres"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="lastName" className="sr-only">Apellidos</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="Apellidos"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="phone" className="sr-only">Numero de celular</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="Numero de Celular"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="userType" className="sr-only">Tipo de Usuario</label>
                  <input
                    id="userType"
                    name="userType"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="Tipo de Usuario"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="referralId" className="sr-only">ID de Referido</label>
                  <input
                    id="referralId"
                    name="referralId"
                    type="text"
                    required
                    className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                    placeholder="ID de Referido"
                  />
                </div>
              </>
            )}
            <div className={isRegistering ? "mt-3" : ""}>
              <label htmlFor="email" className="sr-only">Correo Electronico</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                placeholder="Correo Electronico"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                placeholder="Contraseña"
              />
            </div>
            {isRegistering && (
              <div className="mt-3">
                <label htmlFor="confirmPassword" className="sr-only">Confirmar Contraseña</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-2xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red_treas focus:border-red_treas focus:z-10 sm:text-base"
                  placeholder="Confirmar Contraseña"
                />
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-red_treas focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-black"
            >
              {isRegistering ? 'Registrate' : 'Iniciar Sesion'}
            </button>
          </div>
        </form>
        <div className="text-center">
          {isRegistering ? (
            <a href="#" onClick={toggleForm} className="text-sm text-bg-black hover:text-red_treas">
              Ya tienes cuenta ? <span className="text-red_treas">Inicia Sesion</span>
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
