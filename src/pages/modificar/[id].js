import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import {useMiProvider} from '../context/contexto.js'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

const ModificarLibro = () => {

    const router = useRouter()
    const [cuenta, setCuenta] = useMiProvider()
    
    const [libros, setLibros] = useState([]);
    async function leer() {
        const opciones = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        };
        const request = await fetch("../api/libros/leer", opciones);
        const data = await request.json();
        console.log(data);
        setLibros(data);
    }
    useEffect(() => {
        leer();
    }, []);

    const id = router.query.id
    const p = libros.filter((item)=>{return item["id"] == id.toString()})[0]
    if (!p) return <p></p>

    let libroModificado = {...p}
    
    function registrarCambio(e){
        libroModificado[e.target.name] = e.target.value
    }

    const escribirJSON = async () =>{
        console.log(libroModificado)
        const params = JSON.stringify(libroModificado)
        try {
            const peticion = await fetch (
                '../api/libros/modificar',
                {
                    method : 'POST',
                    body : params,
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )

            const data = await peticion.json()
            alert("libro modificado")

        } catch (err) {
            console.log(err)
        }
  
    }


    return (<Layout content={
        <>
            <Head>
                <title>Perfil</title>
            </Head>
            <div id="tituloP2">
                <p>Hola, {cuenta.nombres}</p>
                <Image src="/divider.png" width={1088} height={1} alt="imagen de libro"></Image>
            </div>
            <div id="form_perfil2">
                <div id="barra_perfil">
                    <div id="barra_texto_notselected" class="selected2">
                        <p id="txt_insertar">MODIFICAR LIBRO</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                        <div id="imagen_perfil2">
                            <Image src="/Rectangle 5.png" width={279} height={253} alt="rectangulo"></Image>
                        </div>
                    </div>
                    <form action="registrarLibro" onSubmit={hacernada}>
                        <div class="col-span-1">
                            <div id="cuadro_texto_idioma">
                                <div class="borde_text_field">
                                    <div class="state_layer">
                                        <div class="content_perfil">
                                            <div id="text_perfil">
                                                <p>TÍTULO</p>
                                            </div>
                                            <div id="input_text_idioma">
                                                <input type='text' id="inputTituloLibro" name="titulo" onChange={registrarCambio} defaultValue={libroModificado.titulo}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="supporting-text">
                                    <p></p>
                                </div>
                            </div>

                            <div id="cuadro_texto_prefijo">
                                <div class="borde_text_field">
                                    <div class="state_layer">
                                        <div class="content_perfil">
                                            <div id="text_perfil">
                                                <p>Autor,autores</p>
                                            </div>
                                            <div id="input_text_prefijo">
                                                <input type='text' id="inputAutorLibro" name="autor" onChange={registrarCambio} defaultValue={libroModificado.autor}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="supporting-text">
                                    <p></p>
                                </div>
                            </div>

                            <div id="cuadro_texto_color">
                                <div class="borde_text_field">
                                    <div class="state_layer">
                                        <div class="content_perfil">
                                            <div id="text_perfil">
                                                <p>ISBN</p>
                                            </div>
                                            <div id="input_text_color">
                                                <input type='text' id="inputisbn" name="isbn" onChange={registrarCambio} defaultValue={libroModificado.isbn}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="supporting-text">
                                    <p></p>
                                </div>
                            </div>
                            <div id="cuadro_texto_color">
                                <div class="borde_text_field">
                                    <div class="state_layer">
                                        <div class="content_perfil">
                                            <div id="text_perfil">
                                                <p>Serie, tipo</p>
                                            </div>
                                            <div id="input_text_color">
                                                <input type='text' id="inputSerie" name="genero" onChange={registrarCambio} defaultValue={libroModificado.genero}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="supporting-text">
                                    <p></p>
                                </div>
                            </div>
                            <div id="cuadro_texto_color">
                                <div class="borde_text_field">
                                    <div class="state_layer">
                                        <div class="content_perfil">
                                            <div id="text_perfil">
                                                <p>Descripcion</p>
                                            </div>
                                            <div id="input_text_color">
                                                <input type='text' id="inputDescripcion" name="descripcion" onChange={registrarCambio} defaultValue={libroModificado.descripcion}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="supporting-text">
                                    <p></p>
                                </div>
                            </div>

                            <div id="cuadro_texto_color">
                                <div class="borde_text_field">
                                    <div class="state_layer">
                                        <div class="content_perfil">
                                            <div id="text_perfil">
                                                <p>Editorial</p>
                                            </div>
                                            <div id="input_text_color">
                                                <input type='text' id="inputtopico" name="editorial" onChange={registrarCambio} defaultValue={libroModificado.editorial}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="supporting-text">
                                    <p></p>
                                </div>
                            </div>


                            <button id="GuardarLibro" class="guardar" onClick={escribirJSON}>Guardar</button>

                        </div>
                        {/* Aquí termina la columna*/}
                    </form>
                </div>
                <div id="modalReser-rl" class="modal-container-rl">
                    <div class="modal-content-rl">
                        <h2>Registro Completo</h2>
                        <p>El recurso ha sido grabado con éxito.</p>
                        <div id="close-rl" class="cerrar-rl">
                            <p>OK</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    }
    ></Layout>
    )
}
export default ModificarLibro

function hacernada(e){
    e.preventDefault()
}
function guardarLib() {
    
    const openModal = document.getElementById("GuardarLibro");
    const modalReserva = document.getElementById("modalReser-rl");
    const closeModal = document.getElementById("close-rl");

    openModal.onclick = function(){
        modalReserva.style.visibility = "visible";
    }

    closeModal.onclick = function(){
        modalReserva.style.visibility = "hidden";
    }
    // cerrar en ventana
    modalReserva.onclick = function(){
        modalReserva.style.visibility = "hidden";
    }

    // Aquí puedes realizar cualquier otra acción relacionada con la reserva

  }