import React from 'react'
import {Link} from 'react-router-dom'

const Servicio = ({ imagen, titulo, descripcion ,id}) => {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card border-0">
        <Link to={`/servicios/${id}`}>

            <img className="card-img-top scale-on-hover" src={imagen} alt="Card Image" />
       
          <div className="card-body">
            <h6>
              {titulo}
            </h6>
            <p className="text-muted card-text">{descripcion}</p>
          </div>
            </Link>
        </div>
      </div>
    );
  };
  
export default Servicio