import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import BookingCorp from './views/BookingCorp';
import PrivateRoute  from './components/PrivateRoute'; // Asegúrate de importar el componente de ruta privada
import Layout from './components/Layout';





function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}> // Rutas dentro de SidebarLayout
          <Route path="/home" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
             <Route path="/bookingCorp" element={
            <PrivateRoute>
              <BookingCorp />
            </PrivateRoute>
          } />
         
        </Route>
        {/* Si tienes más rutas sin Sidebar, las puedes agregar aquí fuera de SidebarLayout */}
      </Routes>
    </BrowserRouter>
  );
}
  

export default App;
