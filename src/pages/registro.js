import React from 'react';
import Head from 'next/head';
import '../styles/registro.css'; // Importa los estilos CSS

const Registro = () => {
    return (
        <div className="container">
            <Head>
                <title>Sistema de reserva de libros</title>
                <link rel="stylesheet" href="/css/style.css" />
            </Head>
            <header>
                <div className="header">
                    <h1>Sistema de reserva de libros</h1>
                    <h2>Registro de usuario</h2>
                </div>
            </header>
            <main>
                <section className="formulario">
                    <div className="datos-personales">
                        <h3>Datos Personales</h3>
                        <div className="nombres">
                            <label htmlFor="nombres">Nombres</label>
                            <input type="text" name="nombres" id="nombres" className="custom-border" />
                        </div>
                        <div className="apellidos">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" id="apellidos" className="custom-border" />
                        </div>
                        <div className="documento">
                            <label htmlFor="documento">Tipo de Documento</label>
                            <input type="text" name="documento" id="documento" className="custom-border" />
                        </div>
                        <div className="nrodocumento">
                            <label htmlFor="nrodocumento">Nro de Documento</label>
                            <input type="text" name="nrodocumento" id="nrodocumento" className="custom-border" />
                        </div>
                    </div>
                    <div className="datos-cuenta">
                        <h3>Datos de la cuenta</h3>
                        <div className="correo">
                            <label htmlFor="correo">Correo Electrónico</label>
                            <input type="text" name="correo" id="correo" className="custom-border" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" id="password" className="custom-border" />
                        </div>
                        <div className="passwordin">
                            <label htmlFor="passwordin">Ingrese Password nuevamente</label>
                            <input type="text" name="passwordin" id="passwordin" className="custom-border" />
                        </div>
                        <input type="submit" value="Registrar" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Registro;
