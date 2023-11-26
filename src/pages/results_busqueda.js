import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout.js'
import {useMiProvider} from './context/contexto.js'
import { useEffect, useState } from "react"; // Importa useEffect y useState
import { useRouter } from "next/router";
import Modal from "./modal.js"
import { useSearchParams } from 'next/navigation';
import Resultados_lista from "./resultados_lista.js"
import styles from '../styles/resultado_busqueda.module.css'


const Resultados = (parametros) => {
    const [cuenta, setCuenta] = useMiProvider();
    const router = useRouter();

    return (
        <Layout content={
        <>
            <Head>
                <title>Busqueda de libros</title>
            </Head>

            <div class="flex justify-between">
                <h1 class="text-2xl font-semibold mb-4">Búsqueda</h1>
                <button type="button" class={styles.mis_reservaciones}
                onClick={()=>{router.push('/busqueda_books')}}>Volver a buscar</button>
            </div>

            <Image src="/divider.png" width={1088} height={1} class="py-4" alt="imagenDefault"></Image>

            <div class="flex justify-between">
                <h1 class="text-1xl font-semibold mb-4">Resultados de la busqueda</h1>
                <button type="button" class={styles.mis_reservaciones}
                onClick={()=>{router.push('/pagina_principal')}}>Ver mis reservas</button>
            </div>
            

            <Resultados_lista></Resultados_lista>


        </>
        }
        ></Layout>
    )
}

export default Resultados
