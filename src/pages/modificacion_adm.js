import React from 'react';
import Head from 'next/head';
import '../styles/modificacion_adm.css'; // cambia

const Registro = () => {
    return (
        <div className="container">
            <head>
                <meta charSet="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <title>Modicar Adm</title>
            </head>
            <header>
                <div className="header">
                    <h2>Hola, XXXXXX</h2>
                </div>
            </header>

            <div id="fondo_b">

                <main>
                                
                    <section className="formulario">
                        <div className="opciones">
                            <input type="submit" value="Datos Personales" id="Datos_Personales"></input>
                            <input type="submit" value="Cuenta" id="Cuenta"></input>
                            <input type="submit" value="Preferencia" id="Preferencia"></input>

                        </div>
                        
                        <div className="datos-personales">    
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
                            
                            <input type="submit" id="boton_mod" value="Registrarse"></input>

                        </div>
                        
                    </section>
                </main>
            
            </div>
        </div>
    );
};

export default Registro;