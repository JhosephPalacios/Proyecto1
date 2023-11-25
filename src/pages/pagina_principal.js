import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import { useMiProvider } from './context/contexto.js'
import library from '../json/libros.json'
import { useState, useEffect } from "react"

const Index = () => {

    const [cuenta, setCuenta] = useMiProvider()

    const [datosMasRecientes, setdatosMasRecientes] = useState([]) 
    const [pageMasRecientes, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    async function leerRecientes() {
        const opciones = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        const request = await fetch(`/api/ordenarIndex/ordenarRecientes?page=${pageMasRecientes}`, opciones)
        let data = await request.json()
        console.log(data)

        setdatosMasRecientes(data.items)
        setTotalPages(data.totalPages)
    }

    function retrocederLosMasRecientes() {
        if (pageMasRecientes > 1) {
            setPage(pageMasRecientes - 1)
        }

    }
    function avanzarLosMasRecientes() {
        if (pageMasRecientes < totalPages) {
            setPage(pageMasRecientes + 1)
        }

    }
    useEffect(() => {
        leerRecientes()
    }, [pageMasRecientes]) 


    const [datosMasPedidos, setDatos1] = useState([]) 
    const [pageMasPedidos, setpageMasPedidos] = useState(1)
    const [totalPages1, setTotalpageMasPedidos] = useState(1)

    async function leerMasPedidos() {
        const opciones = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        const request = await fetch(`/api/ordenarIndex/ordenarMasPedidos?page=${pageMasPedidos}`, opciones)
        let data = await request.json()
        console.log(data)
        setDatos1(data.items)
        setTotalpageMasPedidos(data.totalPages1)
    }

    function retrocederLosMasPedidos() {
        if (pageMasPedidos > 1) {
            setpageMasPedidos(pageMasPedidos - 1)
        }

    }
    function avanzarLosMasPedidos() {
        if (pageMasPedidos < totalPages1) {
            setpageMasPedidos(pageMasPedidos + 1)
        }

    }
    useEffect(() => {
        leerMasPedidos()
    }, [pageMasPedidos]) 




    const [datosProximo, setDatos2] = useState([]) 
    const [pageProximo, setpageProximo] = useState(1)
    const [totalPages2, setTotalpageProximo] = useState(1)

    async function leerProximos() {
        const opciones = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        const request = await fetch(`/api/ordenarIndex/ordenarProximos?page=${pageProximo}`, opciones)
        let data = await request.json()
        console.log(data)

        setDatos2(data.items)
        setTotalpageProximo(data.totalPages2)
    }

    function retrocederProximo() {
        if (pageProximo > 1) {
            setpageProximo(pageProximo - 1)
        }

    }
    function avanzarProximo() {
        if (pageProximo < totalPages2) {
            setpageProximo(pageProximo + 1)
        }

    }

    useEffect(() => {
        leerProximos()
    }, [pageProximo]) 



    const escribirJSON = async (e) => {
        const params = JSON.stringify(cuenta)
        try {
            const peticion = await fetch(
                '/api/proximos/escribir',
                {
                    method: 'POST',
                    body: params,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await peticion.json()
            leerProximos()

        } catch (err) {
            console.log(err)
        }

    }
    const escribirJSONMasPedidos = async (e) => {
        try {
            const peticion = await fetch(
                '/api/masPedidos/escribir',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await peticion.json()
            leerMasPedidos()

        } catch (err) {
            console.log(err)
        }

    }

    const llamarRecientes = async () => {

        const peticion = {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        };
        if(cuenta.tipo == "user"){
            const request = await fetch(`/api/reservas/ultimas?id=${cuenta.id}&page=${pageMasRecientes}`, peticion);
            const data = await request.json();   
            setdatosMasRecientes(data.items)
            setTotalPages(data.totalPages)
        }
        if(cuenta.tipo == "admin"){
            const request = await fetch(`/api/reservas/ultimasAdmin?id=${cuenta.id}&page=${pageMasRecientes}`, peticion);
            const data = await request.json();   
            setdatosMasRecientes(data.items)
            setTotalPages(data.totalPages)
        }
    };
    useEffect(() => {
        llamarRecientes()
    }, [pageMasRecientes])


    const llamarProximos = async () => {

        const peticion = {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const request = await fetch(`/api/reservas/proximos?id=${cuenta.id}&page=${pageProximo}`, peticion);
        const data = await request.json();   
        setDatos2(data.items)
        setTotalpageProximo(data.totalPages)
        
    };
    useEffect(() => {
        llamarProximos()
    }, [pageProximo])

    const llamarMasPedidos = async () => {

        const peticion = {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const request = await fetch(`/api/libros/MasPedidos?page=${pageMasPedidos}`, peticion);
        const data = await request.json();   
        setDatos1(data.items)
        setTotalpageMasPedidos(data.totalPages)
        
    };
    useEffect(() => {
        llamarMasPedidos()
    }, [pageMasPedidos])


    const escribirJSONRecientes = async (e) => {
        const params = JSON.stringify(cuenta)
        try {
            const peticion = await fetch(
                '/api/recientes/escribir',
                {
                    method: 'POST',
                    body: params,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await peticion.json()
            leerRecientes()

        } catch (err) {
            console.log(err)
        }

    }

    //Syncronizar las funciones

    /*
    async function todo() {
        await escribirJSON();
        await escribirJSONMasPedidos();
        await escribirJSONRecientes();
        await leerProximos();
        await leerMasPedidos();
        await leerRecientes();
    }
    */
    /*useEffect(() => {
        escribirJSON()
        escribirJSONMasPedidos()
        escribirJSONRecientes()
    }, []);
    */
    useEffect(() => {
        llamarProximos()
        llamarMasPedidos()
        llamarRecientes()
    }, []);




    // Funcionalidad para "Ver todo"
    const [verTodo, setVerTodo] = useState(false);


    return (
        <Layout content={
            <>
                <Head>
                    <title>..:: Biblioteca ::..</title>
                </Head>
                <p></p>
                <div>
                    <p id="bienvenida"><b>Bienvenido, {cuenta.nombres}!</b></p>
                    <Image src="/divider.png" width={1088} height={1} alt="divider"></Image>
                </div>
                <br></br>
                {cuenta.tipo == 'user' && (
                            <div class="rectangulo">
                                <div class="contenedorSubtitulo">
                                    <h2 class="subtitulo">Próximos a vencer</h2>
                                </div>
                                <br></br>
                                <div class="flex flex-wrap">
                                    {Object.entries(datosProximo).map((value, index) => {
                                        return (
                                            <div>
                                                <Link href="/libro/[id]" as={"/libro/" + value[1].reservado.id}>
                                                    <div class="libro">
                                                        <div class="grid grid-cols-6 col-span-1">
                                                            <div class="col-start-1 col-span-1">
                                                                <div class="circulo">
                                                                    <p className="inicial">{obtenerInicialesEnMayuscula(value[1].reservado.titulo)}</p>
                                                                </div>
                                                            </div>
                                                            <div class="col-start-2 col-end-5">
                                                                <div className="contenedorTituloLibro">
                                                                    <div class="line-clamp-2">
                                                                        <p class="tituloLibro"><b>"{value[1].reservado.titulo}"</b></p>
                                                                    </div>
                                                                </div>
                                                                <div className="contenedorInfoLibro">
                                                                    <div class="line-clamp-1">
                                                                        <p className="infoLibro">Fecha de vencimiento: {new Date(value[1].fecha_final).toISOString().split('T')[0]}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-start-6 col-span-1">
                                                                <div class="imagenLibro">
                                                                    <Image src={value[1].reservado.imagen} width={80} height={101} alt="libro"></Image>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                                <div id="cont-proximos">
                                        <div id="cont1-proximos">
                                            <button onClick={retrocederProximo} disabled={pageProximo === 1} id="retro">Anterior</button>
                                            <button onClick={avanzarProximo} disabled={pageProximo === totalPages2} id="avanzar">Siguiente</button>
                                        </div>
                                        <div id="cont2-proximos">
                                            <p id="total1">Total {pageProximo} de {totalPages2}</p>
                                        </div>
                                    </div>

                            </div>)}
                        {cuenta.tipo == 'admin' && (
                            <div class="rectangulo">
                                <div class="contenedorSubtitulo">
                                    <h2 class="subtitulo">Los más pedidos</h2>
                                </div>
                                <br></br>
                                <div class="flex flex-wrap">
                                    {Object.entries(datosMasPedidos).map((value, index) => {
                                        return (
                                            <div>
                                                <Link href="/libro/[id]" as={"/libro/" + value[1].id}>
                                                    <div class="libro">
                                                        <div class="grid grid-cols-6 col-span-1">
                                                            <div class="col-start-1 col-span-1">
                                                                <div class="circulo">
                                                                    <p className="inicial">{obtenerInicialesEnMayuscula(value[1].titulo)}</p>
                                                                </div>
                                                            </div>
                                                            <div class="col-start-2 col-end-5">
                                                                <div className="contenedorTituloLibro">
                                                                    <div class="line-clamp-2">
                                                                        <p class="tituloLibro"><b>"{value[1].titulo}"</b></p>
                                                                    </div>
                                                                </div>
                                                                <div className="contenedorInfoLibro">
                                                                    <div class="line-clamp-1">
                                                                        <p className="infoLibro">Veces pedido: {value[1].contador}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-start-6 col-span-1">
                                                                <div class="imagenLibro">
                                                                    <Image src={value[1].imagen} width={80} height={101} alt="libro"></Image>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                                <div id="cont-maspedidos">
                                        <div id="cont1-maspedidos">
                                            <button onClick={retrocederLosMasPedidos} disabled={pageMasPedidos === 1} id="retro">Anterior</button>
                                            <button onClick={avanzarLosMasPedidos} disabled={pageMasPedidos === totalPages1} id="avanzar">Siguiente</button>
                                        </div>
                                        <div id="cont2-maspedidos">
                                            <p id="total1">Total {pageMasPedidos} de {totalPages1}</p>
                                        </div>
                                </div>
                            </div>)
                        }
            </>
        }
        ></Layout>
    )
}

export default Index

function obtenerInicialesEnMayuscula(texto) {
    if (texto === undefined) return '';
    const palabras = texto.split(" ");
    let iniciales = "";

    for (let i = 0; i < palabras.length && i < 2; i++) {
        const palabra = palabras[i];
        if (palabra.length > 0) {
            const inicial = palabra.charAt(0).toUpperCase();
            iniciales += inicial;
        }
    }

    if (iniciales === "") {
        return texto.toUpperCase();
    }

    return iniciales;
}