import React, { useState, useEffect } from 'react';
import Servicio from './Items/Servicio';
import Loading from './Items/Loading';

const Servicios = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/servicios?populate=*', {
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
    console.log('http://localhost:1337' + item.attributes.img.data.attributes.formats.large.url)
    console.log(item.attributes.img.data.attributes.formats.large.url);
  })
  return (
    <>
      <main className="page projects-page">
        <section className="portfolio-block projects-cards">
          <div className="container">
            <div className="row">
              {isLoading && <Loading />}
              {!isLoading && servicios.map(servicio => (
                <Servicio
                  key={servicio.id}
                  imagen={`http://localhost:1337${servicio.attributes.img.data.attributes.formats.large.url}`}
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
