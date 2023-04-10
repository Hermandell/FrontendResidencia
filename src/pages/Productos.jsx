import React, { useState, useEffect } from 'react';
import Producto from './Items/Producto';
import Loading from './Items/Loading';

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('https://residenciabackend.onrender.com/api/productos?populate=*', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setProductos(data.data);
      setIsLoading(false);
    };
    fetchProductos();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredProductos = productos.filter((product) => {
    return product.attributes.Nombre.toLowerCase().includes(searchTerm.toLowerCase());
  }).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.attributes.Precio - b.attributes.Precio;
    } else if (sortOrder === 'desc') {
      return b.attributes.Precio - a.attributes.Precio;
    } else {
      return 0;
    }
  });
  filteredProductos.map((product) => {
    console.log(product);
  })

  return (
    <section className="portfolio-block projects-cards">
      <div className="container">
        <div className="row my-4">
          <div className="col-12 col-md-6">
            <input type="text" className="form-control mb-2" placeholder="Buscar productos" onChange={handleSearch} />
          </div>
          <div className="col-12 col-md-6">
            <select className="form-select mb-2" onChange={handleSort}>
              <option value="">Ordenar por</option>
              <option value="asc">Precio ascendente</option>
              <option value="desc">Precio descendente</option>
            </select>
          </div>
        </div>
        <div className="row">
          {isLoading ? (
            <Loading />
          ) : (
            filteredProductos.map((product, index) => (
              <div className="col-12 col-md-6 col-lg-4 my-3" key={index}>
                <Producto id={product.id} imagen={`${product.attributes.img.data.attributes.formats && product.attributes.img.data.attributes.formats.large ? product.attributes.img.data.attributes.formats.large.url : product.attributes.img.data.attributes.formats.thumbnail.url}`} nombre={product.attributes.Nombre} precio={product.attributes.Precio} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Productos;
