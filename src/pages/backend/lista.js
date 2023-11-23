import { useEffect, useState  } from 'react'


const MiLista = ( flagCambio ) => {
    const [datos, setDatos] = useState( [] )
    async function leer() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const request = await fetch( '/api/prueba/libros', opciones)
        let data = await request.json()
        console.log( data)
        setDatos(data)
    }
    useEffect( () => {
        leer()
    } , [flagCambio]  )
    return(
            <>
                <ul>
                    {
                        datos.map(  (dato,idx) => (
                            <li key={idx}>
                                {JSON.stringify(dato)}
                            </li>
                        ))
                    }
                </ul>         
            </>
    )
}
export default MiLista
