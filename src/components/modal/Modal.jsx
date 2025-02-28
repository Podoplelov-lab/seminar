import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, children }) => {


  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
