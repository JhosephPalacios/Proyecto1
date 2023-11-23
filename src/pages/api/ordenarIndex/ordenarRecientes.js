import fsPromises from 'fs/promises'
import path from 'path'
import process from 'process'

export default async function leer(req, res) {
    let page = parseInt(req.query.page) 
    let pageSize = 2
    let start= (page -1)* pageSize 
    let end = start + pageSize

    let filePath = 'src/json/recientes.json'
    let ruta = path.join( process.cwd() , filePath )
    try {
        let data = await fsPromises.readFile( ruta )
        console.log(data)
        const totalItems = JSON.parse(data).length
        const totalPages = Math.ceil(totalItems / pageSize) 
        let item = JSON.parse(data)
        let itemsAPaginar = item.slice(start,end)
        itemsAPaginar = JSON.stringify(itemsAPaginar)
        return res.status(200).json( {
            page,
            totalPages,
            pageSize,
            totalItems,
            items: JSON.parse(itemsAPaginar)
            }
        )

    } catch( error) {
        console.log("Ocurrio un error al leer ")
    }

}