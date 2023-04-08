import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand logo text-white">
          <img src="../assets\img\LOGO\8.2.png" width="50" height="50" className="d-inline-block align-top" alt="Logo" />
          XNUGACER
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios" className="nav-link active">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/man" className="nav-link">
                Reparaciones Y Mantenimientos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cv" className="nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#cartDropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
                <span className="badge bg-secondary">2</span>
              </button>
              <div className="dropdown-menu dropdown-menu position-absolute" id="cartDropdown">
                <div className="dropdown-header">Carrito</div>
                <div className="dropdown-item d-flex align-items-center">
                  <img src="https://via.placeholder.com/50x50" alt="Producto 1" className="me-3" />
                  <div>
                    <div>Producto 1</div>
                    <div>Cantidad: 2</div>
                    <div>Precio total: $20</div>
                  </div>
                </div>
                <div className="dropdown-item d-flex align-items-center">
                  <img src="https://via.placeholder.com/50x50" alt="Producto 2" className="me-3" />
                  <div>
                    <div>Producto 2</div>
                    <div>Cantidad: 1</div>
                    <div>Precio total: $10</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item text-end">
                  <div>Total: $30</div>
                  <button className="btn btn-primary mt-3">Pagar</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
