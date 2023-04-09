import React, { useState, useEffect } from 'react';
import Servicio from './Items/Servicio';
import Loading from './Items/Loading';
import { Link } from 'react-router-dom'

const Servicios = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://residenciabackend.onrender.com/api/servicios?populate=*', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        data.data.map(item => {
          console.log(item.attributes.img.data.attributes.formats.large.url);
        })
        setServicios(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  servicios.map(item => {
    console.log('https://residenciabackend.onrender.com' + item.attributes.img.data.attributes.formats.large.url)
    console.log(item.attributes.img.data.attributes.formats.large.url);
  })
  return (
    <>
      <main className="page projects-page">
        <section className="portfolio-block projects-cards">
          <div className="container">
            <div className="heading">
              <h2>SERVICIOS DE INGIENERÍA</h2>
            </div>
              {isLoading && <Loading />}
            <div className="row">
              {!isLoading && servicios.map(servicio => (
                  <Servicio
                    id={servicio.id}
                    key={servicio.id}
                    imagen={`https://residenciabackend.onrender.com${servicio.attributes.img.data.attributes.formats && servicio.attributes.img.data.attributes.formats.large.url ? servicio.attributes.img.data.attributes.formats.large.url : servicio.attributes.img.data.attributes.formats.thumbnail.url}`}
                    titulo={servicio.attributes.titulo}
                    descripcion={servicio.attributes.tiempo}
                  />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Servicios;
