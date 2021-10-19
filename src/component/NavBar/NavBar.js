import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className='NavBar'>
            <ul>
                <Link to='/' className='li'>
                    Inicio
                </Link>
                <Link to='/Contacto' className='li'>
                    Contacto
                </Link>
                <Link to='/Ayuda' className='li'>
                    Ayuda
                </Link>
            </ul>
        </nav>
    );
};

export default NavBar;
