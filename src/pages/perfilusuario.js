import React, { useState } from 'react';
import '../styles/perfilusuario.css'; // Asegúrate de importar tu hoja de estilos

function Perfil() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [showCuenta, setShowCuenta] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const showCuentaSection = () => {
    setShowCuenta(true);
  };

  const showDatosPersonalesSection = () => {
    setShowCuenta(false);
  };

  return (
    <div>
      <div className={`header ${sidebarActive ? 'active' : ''}`}>
        <div className="logo" id="menuIcon" onClick={toggleSidebar}>
          <img src="../menu.png" alt="Icono Izquierdo" className="imagen2" />
          <div className="biblioteca">
            <h2> Biblioteca</h2>
          </div>
        </div>
        <img src="../usuario.png" alt="Icono Derecho" className="imagen" />
      </div>
      <div className="container">
        <div className={`sidebar ${sidebarActive ? 'active' : ''}`} id="sidebar">
          <ul className="menu">
            <li>Principal</li>
            <li onClick={showDatosPersonalesSection}>Perfil</li>
            <li>Horarios</li>
          </ul>
          <p>Biblio v1.0.1-alpha</p>
        </div>
        <div className="content">
          <div className="welcome">Mi Perfil</div>
          <div className="divider"></div>
          <div className="box">
            <div className="new-box">
              <div className="new-box-content">
                <h1 className={`datosperso header-item ${!showCuenta ? 'active' : ''}`} id="buttonperso" onClick={showDatosPersonalesSection}>
                  ㅤDATOS PERSONALESㅤ
                </h1>
                <p id="cuentaButton" className={`header-item ${showCuenta ? 'active' : ''}`} onClick={showCuentaSection}>
                  ㅤㅤㅤCUENTAㅤㅤㅤ
                </p>
              </div>
            </div>
            {showCuenta ? (
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
            ) : (
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
