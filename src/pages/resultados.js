import React, { useState, useEffect } from 'react';
import '../styles/resultados.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const menuIcon = document.getElementById('menuIcon');
    
    const handleClick = () => {
      setSidebarVisible(!sidebarVisible);
    };

    menuIcon.addEventListener('click', handleClick);

    return () => {
      menuIcon.removeEventListener('click', handleClick);
    };
  }, [sidebarVisible]);

  return (
    <div>
      <header className="header">
        <div className="logo" id="menuIcon">
          <img src="../menu.png" alt="Icono Izquierdo" className="imagen2" />
          <div className="biblioteca">
            <h2> Biblioteca</h2>
          </div>
        </div>
        <img src="../usuario.png" alt="Icono Derecho" className="imagen" />
      </header>
      <div className={`container ${sidebarVisible ? 'sidebar-open' : ''}`}>
        <div className="sidebar" id="sidebar">
          <ul className="menu">
            <li>Principal</li>
            <li>Perfil</li>
            <li>Biblioteca</li>
          </ul>
          <p>SAC v1.0.1-alpha</p>
        </div>
        <div className="content">
          <div className="welcome">Biblioteca</div>
          <div className="cajabutton">
            <button className="new-resource-button">Añadir un nuevo recurso</button>
          </div>
          <div className="divider"></div>
          <div className="search-box">
            <div className="search-container">
              <img src="../src/media.png" alt="Buscar" className="search-image" id="searchImage1" />
              <img src="../Palo.png" alt="Buscar" className="search-image2" id="searchImage2" />
              <label htmlFor="search-container">Ingresa la palabra clave</label>
              <input type="text" className="search-input" />
            </div>
          </div>
          <div className="square">
            <div className="square1">
              <div className="profile">
                <p>PP</p>
              </div>
              <h1>TEXTO 1</h1>
              <img src="../media.png" alt="Buscar" className="imagen3" id="imagen3" />
              <p>ISBN:</p>
              <p>Auto:</p>
              <p>Editor:</p>
              <div className="buttonreserva">
                <button className="reserva">Reservar</button>
              </div>
            </div>
            <div className="square2">
              <div className="profile2">
                <p>PP</p>
              </div>
              <h1>TEXTO 2</h1>
              <img src="../media.png" alt="Buscar" className="imagen4" id="imagen4" />
              <p>ISBN:</p>
              <p>Auto:</p>
              <p>Editor:</p>
              <div className="buttonreserva2">
                <button className="reserva2">Reservar</button>
              </div>
            </div>
            <div className="square3">
              <div className="profile3">
                <p>PP</p>
              </div>
              <h1>TEXTO 3</h1>
              <img src="../media.png" alt="Buscar" className="imagen5" id="imagen5" />
              <p>ISBN:</p>
              <p>Auto:</p>
              <p>Editor:</p>
              <div className="buttonreserva3">
                <button className="reserva3">Reservar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
