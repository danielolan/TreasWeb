import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage'; // Asegúrate de importar el nuevo componente

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Ruta principal ahora apunta a HomePage */}
        <Route path="/login" element={<LoginPage />} />
        {/* Si tienes más rutas, las puedes agregar aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
