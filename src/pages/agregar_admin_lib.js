import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto.js'
import {useState} from 'react'

const Perfil = () => {
    const [cuenta, setCuenta] = useMiProvider()

    const [nuevoLibro, setNuevoLibro] = useState({
        "titulo": "",
        "autor": "",
        "isbn": "",
        "editorial": "",
        "tipo": "",
        "topicos": "",
        "descripcion": "",
        "imagen": "",
        "contador" : "0"
    })

    function registrarCambio(e){
        setNuevoLibro({...nuevoLibro, [e.target.name]:e.target.value})
    }

    const escribirJSON = async () =>{
        
        const params = JSON.stringify(nuevoLibro)
        try {
            const peticion = await fetch (
                '/api/libros/agregar',
                {
                    method : 'POST',
                    body : params,
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )

            const data = await peticion.json()
            guardarLib()
            alert("libro registrado")

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
                <Image src="/divider.png" width={1088} height={1} ></Image>
            </div>
            <div id="form_perfil2">
                <div id="barra_perfil">
                    <div id="barra_texto_notselected" class="selected2">
                        <p id="txt_insertar">INSERTAR NUEVO LIBRO</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                        <div id="imagen_perfil2">
                            <Image src="/Rectangle 5.png" width={279} height={253} ></Image>
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
                                                <input type='text' id="inputTituloLibro" name="titulo" onChange={registrarCambio}/>
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
                                                <input type='text' id="inputAutorLibro" name="autor" onChange={registrarCambio}/>
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
                                                <input type='text' id="inputisbn" name="isbn" onChange={registrarCambio}/>
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
                                                <p>Tipo</p>
                                            </div>
                                            <div id="input_text_color">
                                                <input type='text' id="inputTipo" name="tipo" onChange={registrarCambio}/>
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
                                                <p>Topicos</p>
                                            </div>
                                            <div id="input_text_color">
                                                <input type='text' id="inputSerie" name="topicos" onChange={registrarCambio}/>
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
                                                <input type='text' id="inputDescripcion" name="descripcion" onChange={registrarCambio}/>
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
                                                <input type='text' id="inputtopico" name="editorial" onChange={registrarCambio}/>
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
                        {}
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
export default Perfil

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
    modalReserva.onclick = function(){
        modalReserva.style.visibility = "hidden";
    }
  }