import React from 'react';

const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const existingCartItem = cartItems[product.id];

    if (existingCartItem) {
        existingCartItem.cantidad += 1;
    } else {
        cartItems[product.id] = {
            ...product,
            cantidad: 1
        };
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}



const Producto = ({ nombre, precio, imagen, id }) => {
    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">${precio}</p>
                <button type="button" className="btn btn-primary" onClick={() => handleAddToCart({ id, nombre, precio, imagen })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Producto;
