import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import { useMiProvider } from './context/contexto.js'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function busqueda() {

    // Cambiar de acuerdo al tipo de cuenta
    const [cuenta, setCuenta] = useMiProvider()
    let agrega_recurso = cuenta.tipo == 'admin' ? true : false

    const router = useRouter()
    var data

    async function leerJsonLibreria() {
        const opciones = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        const request = await fetch('api/libros/leer', opciones)
        data = await request.json()
        console.log(data)
        return data
    }
    
    async function escribirJsonResultados(searchResults) {
        //localStorage.setItem("searchResults", JSON.stringify(searchResults));
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchResults),
        };

        // Realiza la solicitud POST a la API de escritura de resultados
        const request = await fetch('/api/busqueda/escribir', requestOptions);
        data = await request.json()
        console.log(data)

    }

    const [palabraclave, setPalabraclave] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [tipoRecurso, setTipoRecurso] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log(palabraclave)
        // Inicializa results con la lista completa de libros
        let results = await leerJsonLibreria();
        // Quiere decir que si no se ingresa nada en esos cambios no filtrará
        if (selectedFilters.length === 0 && palabraclave.trim() === "" && tipoRecurso.trim() === "") {
            // Si no se selecciona ningún campo, no aplicar ningún filtro
            setSearchResults([]);
            return;
        }
        results = results.filter((book) => {
            // Verificar si la palabra clave se encuentra en alguno de los campos seleccionados
            const keywordMatch = selectedFilters.some((filter) =>
                (book[filter] || "").toLowerCase().includes(palabraclave.toLowerCase())
            );

            // Verificar si el tipo de recurso coincide
            const tipoMatch = tipoRecurso.trim() === "" || (book.tipo || "").toLowerCase().includes(tipoRecurso.toLowerCase());

            return keywordMatch && tipoMatch;
        });
        // Actualiza el estado de los resultados
        setSearchResults(results);
        escribirJsonResultados(results);
        router.push('/resultados');
    };

    // almacenar los filtros de checkbox
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            // Agregar el campo seleccionado a la lista de filtros
            setSelectedFilters([...selectedFilters, value]);
        } else {
            // Eliminar el campo seleccionado de la lista de filtros
            setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
        }
        console.log(selectedFilters)
    };

    return (
        <Layout content={
            <>
                <Head>
                    <title>Busqueda</title>
                </Head>
                <div id="form_perfil">

                    <div class="bg-white p-6 rounded-md shadow-md w-12/12 h-full">
                        <div class="flex justify-between gap-4 mb-4">
                            <h1 class="text-2xl font-semibold">Búsqueda</h1>
                            { agrega_recurso && (
                            <Link type="button" href="/agregarLibroAdm" class="px-4 py-2 hover:bg-blue-600 border rounded-full color_fondo_primario color_letra_blanco">Agregar un nuevo recurso</Link>
                            )}
                            </div>
                        <div class=" py-4 px-4 color_fondo_secundario">
                            <form class="flex" onSubmit={handleSearch}>

                                <div class="w-1/2 mr-4 space-y-4 m-3 ">

                                    <div id="text_field_b1 relative">
                                        <div class="borde_text_field">
                                            <div class="state_layer">
                                                <div class="content">
                                                    <div id="text_perfil">
                                                        <p>Ingresa la palabra clave</p>
                                                    </div>
                                                    <div id="input_text_usuario">
                                                        <input type='text' placeholder='' id="inputUsu" value={palabraclave} onChange={(e) => setPalabraclave(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="supporting-text relative">
                                            <p></p>
                                        </div>

                                    </div>

                                    <div id="text_field_b2">
                                        <div class="borde_text_field">
                                            <div class="state_layer">
                                                <div class="content">
                                                    <div id="text_perfil">
                                                        <p>Tipo de Recurso</p>
                                                    </div>
                                                    <div id="input_text_usuario">
                                                        <input type='text' placeholder='' id="inputUsu" value={tipoRecurso} onChange={(e) => setTipoRecurso(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="supporting-text">
                                            <p></p>
                                        </div>

                                    </div>

                                </div>



                                <div class="w-1/2">
                                    <div class="mb-4">
                                        <p class="text-gray-700 text-sm text-purple-primary font-bold color_letra_primario">Incluir en busqueda:</p>
                                        <div class="space-y-2">
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter1" value="titulo" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                                <span class="ml-2 text-purple-primary font-bold color_letra_primario">Titulo</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter2" value="autor" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                                <span class="ml-2 text-purple-primary font-bold color_letra_primario">Autor, Autores</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter3" value="genero" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                                <span class="ml-2 text-purple-primary font-bold color_letra_primario">Topico</span>
                                            </label>
                                            <label class="flex items-center">
                                                <input type="checkbox" name="filter4" value="isbn" class="form-checkbox text-purple-primary border-purple-primary" onChange={handleCheckboxChange}></input>
                                                <span class="ml-2 text-purple-primary font-bold color_letra_primario">ISBN</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right space-x-2 ">
                                    <button type="reset" class="bg-purple-bg text-purple-primary px-4 py-2 hover:bg-blue-600 border rounded-full color_letra_primario">Limpiar</button>
                                    <button type="submit" onClick={handleSearch} class="bg-purple-primary text-purple-bg px-4 py-2 hover:bg-blue-600 border rounded-full color_fondo_primario color_letra_blanco" >Buscar</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </>
        }
        ></Layout>
    )
}