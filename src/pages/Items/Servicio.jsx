import React from 'react'

const Servicio = ({ imagen, titulo, descripcion }) => {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card border-0">
          <a href="#">
            <img className="card-img-top scale-on-hover" src={imagen} alt="Card Image" />
          </a>
          <div className="card-body">
            <h6>
              <a href="#">{titulo}</a>
            </h6>
            <p className="text-muted card-text">{descripcion}</p>
          </div>
        </div>
      </div>
    );
  };
  
export default Servicio