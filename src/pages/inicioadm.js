import Link from "next/link"

const inicioadm  = () => {
    return (
    <div className="fondo_morado">
    </div>
    )
}


/* COLUMNA */

// Crear el elemento div para el rectángulo
const rectangle = document.createElement('div');
rectangle.style.boxSizing = 'border-box';
rectangle.style.width = '146px';
rectangle.style.height = '656px';
rectangle.style.flexShrink = '0';
rectangle.style.background = '#D9D9D9';
rectangle.style.display = 'flex';

// Crear el div para la columna de enlaces
const enlacesColumna = document.createElement('div');
enlacesColumna.style.display = 'flex';
enlacesColumna.style.flexDirection = 'column';
enlacesColumna.style.alignItems = 'flex-start';
enlacesColumna.style.padding = '10px';
enlacesColumna.style.borderRight = '1px solid #000';

// Datos de los enlaces
const enlaces = [
  { texto: 'Enlace 1', archivo: 'Inicio.js' },
  { texto: 'Enlace 2', archivo: 'Perfil.js' },
  { texto: 'Enlace 3', archivo: 'Bibliotecas.js' }
];

// Crear y agregar los enlaces a la columna
enlaces.forEach((enlaceData) => {
  const enlace = document.createElement('a');
  enlace.href = '#';
  enlace.textContent = enlaceData.texto;

  enlace.addEventListener('click', function(event) {
    event.preventDefault();
    cargarScript(enlaceData.archivo);
  });

  enlacesColumna.appendChild(enlace);
});

// Agregar la columna de enlaces al rectángulo
rectangle.appendChild(enlacesColumna);

// Agregar el rectángulo al body del documento
document.body.appendChild(rectangle);

// Función para cargar el script
function cargarScript(archivo) {
  const script = document.createElement('script');
  script.src = archivo;
  document.body.appendChild(script);
}




export default inicioadm