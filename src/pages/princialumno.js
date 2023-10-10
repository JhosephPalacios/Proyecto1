import React, { useEffect } from 'react';
import '../styles/princialumn.css';

function App() {
  useEffect(() => {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });
  }, []);
  return (
    <div className="App">
      <div className="header">
        <div className="logo" id="menuIcon">
          <img src="menu.png" alt="Icono Izquierdo" className="imagen2" />
        </div>
        <img src="usuario.png" alt="Icono Derecho" className="imagen" />
      </div>
      <div className="container">
        <div className="sidebar" id="sidebar">
          <ul className="menu">
            <li>Inicio</li>
            <li>Perfil</li>
            <li>Bibliotecas</li>
          </ul>
          <p>Biblio v1.0.1-alpha</p>
        </div>
        <div className="content">
          <div className="welcome">Bienvenido, {"{user}"}</div>
          <div className="divider"></div>
          <div className="box">
            <div className="text-box">
              <p>Últimas reservas</p>
            </div>
            <div className="new-box"></div>
            <div className="new-box2"></div>
            <div className="inner-box"></div>
            <div className="inner-box2"> </div>
          </div>
          <div className="box">
            <div className="text-box">
              <p>Los más pedidos</p>
            </div>
            <div className="new-box"></div>
            <div className="new-box2"></div>
            <div className="inner-box"></div>
            <div className="inner-box2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
