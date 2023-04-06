import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-white portfolio-navbar gradient">
            <div className="container-fluid">
                <a className="navbar-brand logo text-white" href="#">
                    <img src="../assets\img\LOGO\8.2.png" width="50" height="50" className="d-inline-block align-top" alt="Logo" />
                    XNUGACER
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="../index.html">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link active" href="./experiencia.html">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="./Man.html">Reparaciones Y Mantenimientos</a></li>
                        <li className="nav-item"><a className="nav-link" href="./productos.html">Productos</a></li>
                        <li className="nav-item"><a className="nav-link" href="./cv.html">Contacto</a></li>
                        <li className="nav-item"><a className="nav-link" href="./nosotros.html">Nosotros</a></li>
                        <li className="nav-item"></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar