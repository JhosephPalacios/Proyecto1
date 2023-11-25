import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import { useMiProvider } from './context/contexto.js'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import styles from '../styles/estilo_solo_buscar.module.css'

export default function Busqueda() {

    const [cuenta, setCuenta] = useMiProvider()
    const searchParams = useSearchParams();
    const router = useRouter()
    const [palabraclave, setPalabraclave] = useState("");
    const [tipoRecurso, setTipoRecurso] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);
    const handleSearch = async (e) => {
        const params = new URLSearchParams(searchParams);
        params.set('keyword', palabraclave);
        params.set('type', tipoRecurso);
        params.set('filters', selectedFilters);
        console.log(params.toString())
        router.push(`/results_busqueda?${params.toString()}`)
    };
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setSelectedFilters([...selectedFilters, value]);
        } else {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
        }
        console.log(selectedFilters, "modificando: ", value)
    };

    return (
        <Layout content={
            <>
                <Head>
                    <title>Busqueda</title>
                </Head>
                <div id="form_perfil">
                    <div>
                        <div>
                            <h1>Búsqueda</h1>
                            { cuenta.tipo == 'admin' && (
                            <Link type="button" href="/agregar_admin_lib" className={styles.BotonAgregar}>Agregar un nuevo recurso</Link>
                            )}
                            </div>
                        <div>
                            <form class="flex" onSubmit={(e)=>{e.preventDefault()}}>
                                <div class={styles.CajaTexto}>
                                    <div id="text_field_b2">
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

                                    </div>
                                </div>
                                <div class={styles.Direccion}>
                                    <div class={styles.CajaBusqueda}>
                                        <p class={styles.Texto}>Incluir búsqueda en:</p>
                                        <div class={styles.Busqueda}>
                                            <label>
                                                <input type="checkbox" name="filter1" value="titulo" class={styles.Caja} onChange={handleCheckboxChange}></input>
                                                <span class={styles.Texto}>Titulo</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="filter2" value="autor" class={styles.Caja} onChange={handleCheckboxChange}></input>
                                                <span class={styles.Texto}>Autor, autores</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="filter3" value="genero" class={styles.Caja} onChange={handleCheckboxChange}></input>
                                                <span class={styles.Texto}>Serie</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="filter4" value="isbn" class={styles.Caja} onChange={handleCheckboxChange}></input>
                                                <span class={styles.Texto}>ISBN</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class={styles.CajaBotones}>
                                    <button type="reset" className={styles.BotonLimpiar}>Limpiar</button>
                                    <button type="submit" onClick={handleSearch} className={styles.BotonBuscar}>Buscar</button>
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