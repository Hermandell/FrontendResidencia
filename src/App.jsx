import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import AcercaDe from "./pages/AcercaDe";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import DetalleServicio from "./pages/Items/DetalleServicio";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:id" element={<DetalleServicio />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
