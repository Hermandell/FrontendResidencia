import React, { useEffect, useState } from "react";

const Home = () => {
  const [sliders, setSliders] = useState([]);
  const [miembros, setMiembros] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getSliders = async () => {
      const response = await fetch("https://residenciabackend.onrender.com/api/sliders?populate=*");
      const data = await response.json();
      setSliders(data.data);
    };

    const getBlog = async () => {
      const response = await fetch("https://residenciabackend.onrender.com/api/blogs?populate=*");
      const data = await response.json();
      console.log(data.data);
      setBlog(data.data);
    };

    
    const getMiembros = async () => {
      const response = await fetch("https://residenciabackend.onrender.com/api/miembros?populate=*");
      const data = await response.json();
      console.log(data.data);
      setMiembros(data.data);
    };
    
    getBlog();
    getSliders();
    getMiembros();
  }, []);


  return (
    <>
      <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            {sliders.map((slider, index) => (
              <li
                key={index}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {sliders.map((slider, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img width="10%" height="500" src={'https://residenciabackend.onrender.com'+slider.attributes.img.data.attributes.formats.large.url} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slider.attributes.titulo}</h5>
                  <p>{slider.attributes.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  </div>

  <div className="container mt-5">
    <div className="row">
      {
        blog.map((item, index) => (
          <div key={index} className="col-md-8">
          <div className="card mb-3">
            <img src={`${item.attributes.img.data.attributes.formats.medium.url}`} alt={item.attributes.titulo}  className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">{item.attributes.titulo}</h5>
              <p className="card-text">{item.attributes.descripcion}</p>
              <p className="card-text"><small classnam="text-muted">{item.attributes.publishedAt.substring(0, 10)}</small></p>
            </div>
          </div>
        </div>
                    ))
      }
    

      <div className="col-md-4">
        <div className="row">
          {/* Iterar a través de la lista de miembros y crear una columna para cada miembro */}
          {miembros.map((miembro, index) => (
                <div key={index} className="col-md-6">
                  <img src={`${miembro.attributes.img.data.attributes.formats.medium.url}`} alt={miembro.attributes.nombre} className="rounded-circle" width="150" height="150" />
                </div>
              ))}
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Home;
