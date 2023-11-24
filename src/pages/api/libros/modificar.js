import fsPromises from 'fs/promises'
import path from 'path'
import process from 'process'

export default async function modificar (req, res) {

    const opciones = {
        method : 'GET',
        headers : {
            "Content-Type" : "application/json"
        }
    }
    const request = await fetch( process.env.URL + '/api/libros/leer', opciones)
    let libros = await request.json()

    const tmp = JSON.stringify(req.body).replace("'",'"')
    const body = JSON.parse(tmp)

    libros.forEach((element,index) => {
        if(element["id"] == body["id"]) libros[index] = body
    });

    let filePath = 'src/json/libros.json'
    let ruta = path.join( process.cwd() , filePath )
    await fsPromises.writeFile(ruta, JSON.stringify(libros, null, '\t'))
    res.status(200).json(libros)
}