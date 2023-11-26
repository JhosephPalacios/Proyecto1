import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout.js'
import {useMiProvider} from '../context/contexto'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Script from "next/script.js"
import Modal from "../modal.js"


const detalleLibro = () => {

    const router = useRouter()
    const [cuenta, setCuenta] = useMiProvider()
    const [libro, setLibro] = useState([]);
    const [yaActualizado, setYaActualizado] = useState(false)

    const id = router.query.id

    console.log("RENDER con id: ", id)

    async function leer() {
        console.log("LEYENDO EL ID: ", id)
        const opciones = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const request = await fetch(`/api/libros/leer?id=${id}`, opciones);
        const data = await request.json();
        console.log(data);
        setLibro(data);
        setYaActualizado(true);
    }

    if(id){
        if (yaActualizado == false) {
            leer()
        }
    }else{
        console.log("noexiste id ;c")
    }

    async function handleEliminar() {
        try {
            const peticion = await fetch(
                `/api/libros/eliminar?id=${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await peticion.json()
            alert("libro eliminado")
            router.push('/busqueda_books')

        } catch (err) {
            console.log(err)
        }

    }


    const [isModal2Open, setIsModal2Open] = useState(false);
    const openModal2 = () => {
        setIsModal2Open(true);
    };

    function handleChange(event) {
        const fecha = event.target.value;
        setFechaSeleccionada(fecha)
    }

    const [fechaSeleccionada, setFechaSeleccionada] = useState(obtenerFechaFutura())
    function handleChange(event) {
        const fecha = event.target.value;
        setFechaSeleccionada(fecha)
    }

    function obtenerFechaActual() {
        const hoy = new Date();
        const year = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, '0');
        const dia = String(hoy.getDate()).padStart(2, '0');
        return `${year}-${mes}-${dia}`;
    }

    async function reservar(libro) {
        let obj = {
            "persona_id": cuenta.id,
            "libro_id": libro.id,
            "fecha_inicio": obtenerFechaActual(),
            "fecha_final": fechaSeleccionada
        }
        const opciones = {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const request = await fetch('api/reservas/reservar', opciones)
        let data = await request.json()
        console.log(data)
        setYaActualizado(false)

    }
    return <Layout content={
        <>
        
            <Head>
                <title>Citas</title>
            </Head>
            <div id="cuerpo_citas">

                <div id="contendor_ListItem">
                    <div id="contenedor_cita">
                        <h1 id="citas">Citas</h1>
                    </div>
                    <Image src="/full-width.png" width={1800} height={1} alt="fullwith"></Image>
                    <div id="state-layer-tituloLibro">
                        <div id="circuloConInicial">
                            <div id="BuildingblockeCircular">
                                <p id="nombre-dl">{obtenerIniciales(libro.titulo)}</p>
                            </div>
                        </div>
                        <div id="content_libro_dl">
                            <h1 id="titulo_libro_dl" >{libro.titulo}</h1>
                            <p id="autor_libro_dl">{libro.autor}</p>
                        </div>
                    </div>
                    <div id="cont_libr_dl" class="">
                        <Image src={libro.imagen} width={184} height={151} alt="imagenLib"  id="imglibro" class="w-120 h-40"></Image>
                    </div>
                    <div id="contenedor_texto-dl">
                        <p id="texto-dl">{libro.descripcion}</p>
                    </div>
                    <div id="todo-edit">
                        <div id="contenedor_editorial-dl">
                            <p id="editorial-dl-text">Editorial</p>
                            <p id="editorial-name-dl">{libro.editorial}</p>
                        </div>
                    </div>

                    <div id="text-topicos">
                        <p id="topi">Tópicos</p>
                    </div>

                    <div id="todosTopicos">                        
                        {Object.entries(libro.topicos?libro.topicos.split(','):[]).map( (value,index) => {
                            return (
                            <div id="contenedor_topi1" key={index}>
                                <div class="topi-stateLayer">
                                    <p id="top1">{value[1]}</p>
                                </div>
                            </div>
                            )
                        })}                        
                    </div>

                    
                    <div id="dispo-nodispo">
                        <p id="dispoNodispo">{libro.disponible?"Disponible":cuenta.tipo=='admin'?libro.ultimo_reservante:"No Disponible"}</p>
                    </div>

                </div>
                {cuenta.tipo == 'user' && libro.disponible && (
                <form action="reservarLibroDatos" onSubmit={hacernada}>
                    <div id="total-reserva">
                        <div id="contenedor_reserva-dl">
                            <h1 id="reservar-dl">Reservar</h1>
                        </div>
                        <Image src="/full-width.png" width={1800} height={1} alt="fullwith"></Image>
                        <div id="text_field_fecha-dl">
                            <div class="text_field">
                                <div class="state_layer">
                                    <div class="content">
                                        <div id="text_usuario">
                                            <p>Ingrese una Fecha limite</p>
                                        </div>
                                        <div id="input_text_usuario">
                                            <input type='date' id="inputDate" defaultValue={obtenerFechaFutura()} min={obtenerFechaActual()} max={obtenerFechaFutura()} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="supporting-text">
                                <p id="ddmmyyyy"> DD/MM/YYYY</p>
                            </div>
                        </div>
                        {libro.disponible==true && (
                        <div id="contenedor_breservar">
                            <button id="bReserv" onClick={()=>{reservar(libro); openModal2();}} >Reservar</button>
                        </div>
                        )}

                    </div>
                </form>
                )}


                {cuenta.tipo == 'admin' && (
                    <div>
                        <br/>
                        <button id="boton_eliminar" onClick={handleEliminar}>Eliminar</button>
                    </div>
                )}
            </div>
        </>
    }
    
    ></Layout>

}

export default detalleLibro


function obtenerFechaActual() {
    const hoy = new Date();
    const year = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    console.log(`${year}-${mes}-${dia}`)
    return `${year}-${mes}-${dia}`;
}
function obtenerFechaFutura() {
    let treintaDias = new Date();
    treintaDias.setDate(treintaDias.getDate() + 30)
    const year = treintaDias.getFullYear();
    const mes = String(treintaDias.getMonth() + 1).padStart(2, '0');
    const dia = String(treintaDias.getDate()).padStart(2, '0');
    console.log(`${year}-${mes}-${dia}`)
    return `${year}-${mes}-${dia}`;
}

function hacernada(e){
    e.preventDefault()
}


function obtenerIniciales(titulo) {
    if(!titulo) return "";
    const palabras = titulo.split(" ");
    const iniciales = palabras
      .slice(0, 2) 
      .map((palabra) => palabra[0].toUpperCase());
    return iniciales.join("");
  }