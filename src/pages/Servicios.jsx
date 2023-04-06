import React, { useState } from 'react';
import Servicio from './Items/Servicio';
import Loading from './Items/Loading';

const Servicios = () => {
  const [isLoading, setIsLoading] = useState(true);

  const servicios = [
    {
      imagen: '../assets/img/LOGO/Ingieneria/1.jpg',
      titulo: 'Servicio de estudio, diseño y ejecución de obra civil.',
      descripcion: 'Descripción',
    },
    {
      imagen: '../assets/img/LOGO/Ingieneria/2.jpg',
      titulo: 'Diseño de proyectos e instalación de calefacción y refrigeración de edificios.',
      descripcion: 'Descripción',
    },
    {
      imagen: '../assets/img/LOGO/Ingieneria/3.jpg',
      titulo: 'Diseño y ejecución de instalaciones eléctricas.',
      descripcion: 'Descripción',
    },
    {
      imagen: '../assets/img/LOGO/Ingieneria/4.jpg',
      titulo: 'Ejecución de proyectos de instalación de alumbrado público.',
      descripcion: 'Descripción',
    },
    {
      imagen: '../assets/img/LOGO/Ingieneria/5.jpg',
      titulo: 'Diseño e instalación de sistemas de protección contra incendios, detectores de incendios y extintores.',
      descripcion: 'Descripción',
    },
    {
      imagen: '../assets/img/LOGO/Ingieneria/6.jpg',
      titulo: 'Instalación de sistemas de control.',
      descripcion: 'Descripción',
    },
  ];

  // Simulamos una espera de 2 segundos para cargar los datos
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <main className="page projects-page">
      {isLoading ? (
        <Loading />
      ) : (
        <section className="portfolio-block projects-cards">
          <div className="container">
            <div className="heading">
              <h2>SERVICIOS DE INGIENERÍA</h2>
            </div>
            <div className="row">
              {servicios.map((servicio, index) => (
                <Servicio key={index} imagen={servicio.imagen} titulo={servicio.titulo} descripcion={servicio.descripcion} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Servicios;