import React, { useEffect } from 'react';
import '../styles/princialumn.css'; // Importa tu archivo CSS aquí

function MyPage() {
  const user = "TuNombreDeUsuario"; // Reemplaza "TuNombreDeUsuario" con el valor adecuado
  useEffect(() => {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');

    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });

      // Limpieza del evento al desmontar el componente
      return () => {
        menuIcon.removeEventListener('click', () => {
          sidebar.classList.toggle('active');
        });
      };
    }
  }, []);

  return (
    <div>
      <div className="header">
        <div className="logo" id="menuIcon">
          <img src="menu.png" alt="Icono Izquierdo" className="imagen2" />
        </div>
        <img src="usuario.png" alt="Icono Derecho" className="imagen" />
      </div>
      <div className="container">
        <div className="sidebar" id="sidebar">
          <ul className="menu">
            <li>Principal</li>
            <li>Perfil</li>
            <li>Préstamos</li>
          </ul>
          <p>SAC v1.0.1-alpha</p>
        </div>
        <div className="content">
          <div className="welcome">Bienvenido, {user}</div>
          <div className="divider"></div>
          <div className="box box1">
            <div className="text-box">
              <p>Últimas reservas</p>
            </div>
            <div className="new-box">
              <div className="circle"></div> {/* Círculo a la izquierda */}
              <div className="text">"Clean Code: A Handbook of Agile Software Craftsmanship"</div>
              <div className="text2">18/09/2023 08:00 am</div>
              <img src="portada.png" alt="Imagen" className="image" /> {/* Imagen al final */}
            </div>
            <div className="new-box3">
              <div className="circle"></div> {/* Círculo a la izquierda */}
              <div className="text"></div>
              <div className="text2">18/09/2023 08:00 am</div>
              <img src="portada.png" alt="Imagen" className="image" /> {/* Imagen al final */}
            </div>
          </div>
          
          <div className="box box2">
            <div className="text-box">
              <p>Los más pedidos</p>
            </div>
            <div className="new-box4">
              <div className="circle"></div> {/* Círculo a la izquierda */}
              <div className="text">"Clean Code: A Handbook of Agile Software Craftsmanship"</div>
              <div className="text2">18/09/2023 08:00 am</div>
              <img src="portada.png" alt="Imagen" className="image" /> {/* Imagen al final */}
            </div>
            <div className="new-box2">
              <div className="circle"></div> {/* Círculo a la izquierda */}
              <div className="text"></div>
              <div className="text2">18/09/2023 08:00 am</div>
              <img src="portada.png" alt="Imagen" className="image" /> {/* Imagen al final */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
