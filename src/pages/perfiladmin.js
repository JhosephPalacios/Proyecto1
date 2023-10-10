import React, { useState, useEffect } from 'react';
import '../styles/perfiladmin.css'; // Asegúrate de importar tu hoja de estilos

function App() {
  const [user, setUser] = useState(''); // Define el estado para el nombre de usuario
  const [activeSection, setActiveSection] = useState('datos-personales'); // Estado para controlar qué sección mostrar

  // Función para cambiar la sección activa
  const changeActiveSection = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      // Código para el evento DOMContentLoaded
      const menuIcon = document.getElementById('menuIcon');
      const sidebar = document.getElementById('sidebar');

      if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', () => {
          sidebar.classList.toggle('active');
        });
      }

      // Código para el segundo evento DOMContentLoaded
      const cuentaButton = document.getElementById('cuentaButton');
      const cuentaSection = document.querySelector('.cuenta');
      const preferenciasButton = document.getElementById('preferenciasButton');
      const preferenciasSection = document.querySelector('.preferencia');
      const datosPersonalesButton = document.getElementById('buttonperso');
      const datosPersonalesSection = document.querySelector('.datos-personales');

      if (cuentaButton && cuentaSection && preferenciasButton && preferenciasSection && datosPersonalesButton && datosPersonalesSection) {
        cuentaButton.addEventListener('click', () => {
          // Mostrar la sección de CUENTA y ocultar las demás
          cuentaSection.style.display = 'block';
          preferenciasSection.style.display = 'none';
          datosPersonalesSection.style.display = 'none';

          // Agregar la clase activa a CUENTA y quitarla de los otros elementos
          cuentaButton.classList.add('active');
          preferenciasButton.classList.remove('active');
          datosPersonalesButton.classList.remove('active');
        });

        preferenciasButton.addEventListener('click', () => {
          // Mostrar la sección de PREFERENCIAS y ocultar las demás
          cuentaSection.style.display = 'none';
          preferenciasSection.style.display = 'block';
          datosPersonalesSection.style.display = 'none';

          // Agregar la clase activa a PREFERENCIAS y quitarla de los otros elementos
          cuentaButton.classList.remove('active');
          preferenciasButton.classList.add('active');
          datosPersonalesButton.classList.remove('active');
        });

        datosPersonalesButton.addEventListener('click', () => {
          // Mostrar la sección de DATOS PERSONALES y ocultar las demás
          cuentaSection.style.display = 'none';
          preferenciasSection.style.display = 'none';
          datosPersonalesSection.style.display = 'block';

          // Agregar la clase activa a DATOS PERSONALES y quitarla de los otros elementos
          cuentaButton.classList.remove('active');
          preferenciasButton.classList.remove('active');
          datosPersonalesButton.classList.add('active');
        });
      }
    });
  }, []);

  return (
    <div>
      <div className="header">
        <div className="logo" id="menuIcon" onClick={() => changeActiveSection('inicio')}>
          <img src="../menu.png" alt="Icono Izquierdo" className="imagen2" />
        </div>
        <img src="../usuario.png" alt="Icono Derecho" className="imagen" />
      </div>
      <div className={`container ${activeSection === 'inicio' ? 'active' : ''}`}>
        <div className={`sidebar ${activeSection === 'inicio' ? 'active' : ''}`} id="sidebar">
          <ul className="menu">
            <li onClick={() => changeActiveSection('inicio')}>Inicio</li>
            <li onClick={() => changeActiveSection('datos-personales')}>Perfil</li>
            <li onClick={() => changeActiveSection('preferencia')}>Bibliotecas</li>
          </ul>
          <p>Biblio v1.0.1-alpha</p>
        </div>
        <div className="content">
          <div className="welcome">Hola, {user}</div>
          <div className="divider"></div>
          <div className="box">
            <div className="new-box">
              <div className="new-box-content">
                <h1 className={`datosperso header-item ${activeSection === 'datos-personales' ? 'active' : ''}`} id="buttonperso" onClick={() => changeActiveSection('datos-personales')}>
                  ㅤDATOS PERSONALESㅤ
                </h1>
                <p id="cuentaButton" className={`header-item ${activeSection === 'cuenta' ? 'active' : ''}`} onClick={() => changeActiveSection('cuenta')}>
                  ㅤㅤㅤCUENTAㅤㅤㅤ
                </p>
                <p id="preferenciasButton" className={`header-item ${activeSection === 'preferencia' ? 'active' : ''}`} onClick={() => changeActiveSection('preferencia')}>
                  ㅤPREFERENCIASㅤ
                </p>
              </div>
            </div>
            {activeSection === 'datos-personales' && (
              <div className="datos-personales" id="datos-personales">
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
                <input type="submit" value="Guardar" />
              </div>
            )}
            {activeSection === 'cuenta' && (
              <div className="cuenta">
                <div className="correo">
                  <label htmlFor="correo">Correo</label>
                  <input type="text" name="correo" id="correo" className="custom-border" />
                </div>
                <div className="contra">
                  <label htmlFor="contra">Contraseña</label>
                  <input type="password" name="contra" id="contra" className="custom-border" />
                </div>
                <input className="boton" type="submit" value="Guardar" />
              </div>
            )}
            {activeSection === 'preferencia' && (
              <div className="preferencia">
                <div className="idioma">
                  <label htmlFor="idioma">Idioma</label>
                  <input type="text" name="idioma" id="idioma" className="custom-border" />
                </div>
                <div className="prefijo">
                  <label htmlFor="prefijo">Prefijo</label>
                  <input type="text" name="prefijo" id="prefijo" className="custom-border" />
                </div>
                <div className="Color">
                  <label htmlFor="Color">Color</label>
                  <input type="text" name="Color" id="Color" className="custom-border" />
                </div>
                <input className="boton2" type="submit" value="Guardar" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
