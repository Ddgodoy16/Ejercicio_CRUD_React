import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Usuarios } from './componentes/Usuarios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
