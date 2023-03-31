import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';
import logo from '../assets/img/Logo_TiendaRopa.png'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <Link to="/"><img src={logo} alt="Logo de la empresa" /></Link>
            </div>
            <div className="button-container">
                <Link to="/login">Iniciar sesión</Link>
                <Link to="/register">Registrarse</Link>
            </div>
        </header>
    );
}

export default Header;