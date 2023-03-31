import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <p className="footer__rights">© Derechos reservados 2023</p>
      </div>
      <div className="footer__info-container">
        <p className="footer__info"><strong>Dirección:</strong> Suchiapa, Chiapas</p>
        <p className="footer__info"><strong>Teléfono:</strong> 961 617 1460</p>
      </div>
    </footer>
  );
}

export default Footer;