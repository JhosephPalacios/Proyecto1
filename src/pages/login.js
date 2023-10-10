import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Importa useRouter para navegar a la página

import '../styles/login.css';

const Index = () => {
    const router = useRouter();

    const handleRegistroClick = () => {
        // Navegar a la página "registro.js"
        router.push('/registro');
    };

    return (
        <div className="container">
            <Head>
                <title>Sistema de Reserva de Libros</title>
            </Head>
            <div className="logo">Sistema de Reserva de Libros</div>
            <div className="custom-input-container">
                <label htmlFor="user-email">Usuario o Correo</label>
                <input type="text" id="user-email" className="custom-input" />
            </div>
            <div className="custom-input-container">
                <label htmlFor="user-password">Contraseña</label>
                <input type="password" id="user-password" className="custom-input" />
            </div>
            <div className="small-text">
                <a href="#">Olvidé mi contraseña</a>
            </div>
            <div className="button-container">
                <a className="register-link" onClick={handleRegistroClick}>Registro de Usuario</a>
                <button className="login-button">Ingresar</button>
            </div>
        </div>
    );
};

export default Index;
