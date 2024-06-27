import { HTTP, URL } from "./http"
const ROUTE = '/api/products'

export const obtenerProductos = async () => {//obtiene todos los productos
    try {
        const result = await HTTP.GET(URL.URL_API + ROUTE, {})
        //console.log('RESULT', result.productos)
        if (result.status !== 200) {            
            //throw new Error('Error al obtener los productos')
            //throw { status: 400, message: 'Error al obtener los productos' }
            throw result//1. tira el result como un error para ser atrapado por el catch de abajo.
        }
        //const data = await result.json()
        //return data
        return result.productos
        
    } catch (error) {//2. atrapa el result (error).
        //console.log(error)
        //console.error('Error al obtener los productos:', error)
        throw { message: error.message }//3. vuelvo a lanzarlo solamente con el mensaje para enviarlo a la página de listar productos cuando haya un error.
    }
}

export const registrarProducto = async (producto) => {
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/registerproduct', producto)
        //console.log(result)
        if (!result.ok) {
            throw result//1. tira el result como un error para ser atrapado por el catch de abajo.
        }
    } catch (error) {//2. atrapa el result (error).
        //console.log('ERROR EN EL LOGUEO', error)
        throw { message: error.message }//3. vuelvo a lanzarlo solamente con el mensaje para enviarle al handleSubmit del form cuando haya un error.
    }
}