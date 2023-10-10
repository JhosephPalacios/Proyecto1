import React, { useEffect } from 'react';
import '../styles/libro.css'; // Asegúrate de importar el archivo CSS correspondiente

function PrincipalPerfil({ user }) {
  useEffect(() => {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');

    const toggleSidebar = () => {
      sidebar.classList.toggle('active');
    };

    menuIcon.addEventListener('click', toggleSidebar);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      menuIcon.removeEventListener('click', toggleSidebar);
    };
  }, []); // El segundo argumento vacío [] asegura que este efecto se ejecute una vez después de montar el componente

  return (
    <div>
      <div className="header">
        <div className="logo" id="menuIcon">
          <img src="../menu.png" alt="Icono Izquierdo" className="imagen2" />
        </div>
        <img src="../usuario.png" alt="Icono Derecho" className="imagen" />
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
          <div className="welcome">Hola, {user}</div>
          <div className="divider"></div>
          <div className="box">
            <img src="../imagenes/libros.png" alt="imagen5" className="imagen5" />
            <div className="new-box">
              <div className="new-box-content">
                <h1 className="datosperso header-item" id="buttonperso">
                  ㅤINSERTAR NUEVO LIBROㅤ
                </h1>
              </div>
            </div>
            <div className="datos-personales" id="datos-personales">
              <div className="titulo">
                <label htmlFor="titulo">Título</label>
                <input type="text" name="titulo" id="titulo" className="custom-border" />
              </div>
              <div className="autor">
                <label htmlFor="autor">Autor, autores</label>
                <input type="text" name="autor" id="autor" className="custom-border" />
              </div>
              <div className="ibsn">
                <label htmlFor="ibsn">ISBN</label>
                <input type="text" name="ibsn" id="ibsn" className="custom-border" />
              </div>
              <div className="serie">
                <label htmlFor="serie">Serie, tipo</label>
                <input type="text" name="serie" id="serie" className="custom-border" />
              </div>
              <input type="submit" value="Guardar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalPerfil;
