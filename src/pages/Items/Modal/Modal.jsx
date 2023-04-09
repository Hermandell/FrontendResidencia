import React from 'react'
import './Modal.css'

const Modal = () => {
    return (
        <div className="modal" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Compra realizada correctamente</h2>
                    <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                </div>
                <div className="modal-body">
                    <p>¡Gracias por tu compra!</p>
                </div>
            </div>
        </div>
    )
}

export default Modal