import React, { useEffect } from 'react';
import '../styles/princiadmin.css'; // Asegúrate de importar tu hoja de estilos

function App() {
  const user = 'NombreDeUsuario'; // Debes definir el nombre de usuario

  useEffect(() => {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });
  }, []);
  
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mi Página</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
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
            <div className="welcome">Bienvenido, {user}!</div>
            <div className="divider"></div>
            <div className="box box1">
              <div className="text-box">
                <p>Últimas reservas</p>
              </div>
              <div className="ver-todo">
                <p2>Ver Todo</p2>
              </div>
              <div className="new-box">
                <div className="circle"></div>
                <div className="text">"Clean Code: A Handbook of Agile Software Craftsmanship"</div>
                <div className="text2">18/09/2023 08:00 am</div>
                <img src="portada.png" alt="Imagen" className="image" />
              </div>
              <div className="new-box3">
                <div className="circle"></div>
                <div className="text"></div>
                <div className="text2">18/09/2023 08:00 am</div>
                <img src="portada.png" alt="Imagen" className="image" />
              </div>
            </div>
            <div className="box box2">
              <div className="text-box">
                <p>Los más pedidos</p>
              </div>
              <div className="new-box4">
                <div className="circle"></div>
                <div className="text">"Clean Code: A Handbook of Agile Software Craftsmanship"</div>
                <div className="text2">18/09/2023 08:00 am</div>
                <img src="portada.png" alt="Imagen" className="image" />
              </div>
              <div className="new-box2">
                <div className="circle"></div>
                <div className="text"></div>
                <div className="text2">18/09/2023 08:00 am</div>
                <img src="portada.png" alt="Imagen" className="image" />
              </div>
            </div>
          </div>
        </div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}

export default App;