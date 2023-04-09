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
import ScreenPago from "./pages/Items/ScreenPago/ScreenPago";
import Footer from "./Components/Footer/Footer";
import Contacto from "./pages/Contacto";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className="navbar-container">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:id" element={<DetalleServicio />} />
          <Route path="/nosotros" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/pago" element={<ScreenPago />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
