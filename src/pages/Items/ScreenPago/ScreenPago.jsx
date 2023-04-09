import React, { useState, useEffect } from 'react';
import './ScreenPago.css';
import Loading from '../Loading';

const ScreenPago = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('cartItems')));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      fetch('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data);
          setUser(data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
        });
    }
  }, []);
  if (loading) {
    return <Loading />;
  }
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  console.log(user);
  let total = 0;

  Object.values(cartItems).forEach((item) => {
    total += item.precio * item.cantidad;
  });

  const handleQuantityChange = (id, amount) => {
    const updatedCartItems = { ...items };
    updatedCartItems[id].cantidad += amount;
    if (updatedCartItems[id].cantidad <= 0) {
      delete updatedCartItems[id];
    }
    setItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  const handleRemoveItem = (id) => {
    const updatedCartItems = { ...items };
    delete updatedCartItems[id];
    setItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handlePay = () => {
    const token = localStorage.getItem('token');
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    const items = {
      items: Object.values(cartItems).map(item => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.cantidad,
        precio: item.precio.toFixed(2)
      }))
    }

    const data = {
      data: {
        nombre,
        apellidos,
        correo,
        direccion,
        productos: items,
        total: total.toFixed(2),
        subtotal: (total / 1.16).toFixed(2)
      }
    }

    fetch('http://localhost:1337/api/compras', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => {
          setShowModal(true);
          //loalStorage.removeItem('cartItems');
        
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container mt-4">
      {showModal && (
         <div className="alert alert-success d-flex justify-content-center align-items-center" role="alert" style={{backgroundColor: "#22bb33", color: "#FFFFFF"}}>
         <i className="fas fa-check-circle fa-2x me-2"></i>
         <div>Compra realizada con éxito</div>
     </div>
      )}
      <div className="row justify-content-center" >
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col">
                  <h3>Cart</h3>
                </div>
                <div className="col text-end">
                  <button type="button" className="btn btn-outline-primary">Continue Shopping</button>
                </div>
              </div>
              {Object.values(cartItems).map(item => (
                <div key={item.id} className="row mb-3">
                  <div className="col-sm-3 col-lg-2">
                    <img src={item.imagen} className="img-fluid rounded" alt="Product Image" />
                  </div>
                  <div className="col-sm-9 col-lg-10 my-auto">
                    <h5>{item.nombre}</h5>
                    <p className="mb-0">${item.precio.toFixed(2)}</p>
                    <div className="d-flex align-items-center mt-3">
                      <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <p className="mb-0">{item.cantidad}</p>
                      <button type="button" className="btn btn-sm btn-outline-primary ms-2" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                    <div className="mt-2">
                      <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveItem(item.id)} >Remove</button>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
              {user && (
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="nombre" className="form-control" id="nombre" placeholder="Ejemplo: Pedro Eleazar" onChange={(e) => { e.target.value }} value={user?.name} />
                  </div>
                  <div className="col">
                    <label htmlFor="apellidos" className="form-label">Apellidos:</label>
                    <input type="apellidos" className="form-control" id="apellidos" placeholder="Ejemplo: Uribe Salazar" onChange={(e) => { e.target.value }} value={user?.apellidos} />
                  </div>
                  <br />
                  <div className="col">
                    <label htmlFor="direccion" className="form-label">Dirección:</label>
                    <input type="text" className="form-control" id="direccion" placeholder="Ejemplo: Calle 123, Ciudad" onChange={(e) => { e.target.value }} value={user?.adress} />
                  </div>
                  <div className="col">
                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                    <input type="email" className="form-control" id="email" placeholder="Ejemplo: correo@ejemplo.com" onChange={(e) => { e.target.value }} value={user?.email} />
                  </div>
                </div>
              )}
              {/* ... */}
              <div className="row mb-3">
                <div className="col">
                  <h5>Subtotal:</h5>
                </div>
                <div className="col text-end">
                  <h5>${Object.values(cartItems).reduce((acc, item) => acc + item.precio * item.cantidad, 0).toFixed(2)}</h5>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control form-control-sm" placeholder="Enter Coupon Code" />
                </div>
                <div className="col text-end">
                  <button type="button" className="btn btn-outline-secondary btn-sm">Apply Coupon</button>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <h5>Total:</h5>
                </div>
                <div className="col text-end">
                  <h5>${total.toFixed(2)}</h5>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handlePay}>Pay with PayPal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenPago