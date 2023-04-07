import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-white portfolio-navbar gradient">
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
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
