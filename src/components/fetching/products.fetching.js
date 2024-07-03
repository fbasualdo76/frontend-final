import { HTTP, URL } from "./http"
const ROUTE = '/api/products'

export const obtenerProductos = async () => {//obtiene todos los productos
    try {
        const result = await HTTP.GET(URL.URL_API + ROUTE)
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

export const obtenerDetalleProducto = async (id) => {//obtiene el detalle del producto por id
    try {
        const result = await HTTP.GET(URL.URL_API + ROUTE + '/' + id)        
        if (result.status !== 200) {
            throw result//1. tira el result como un error para ser atrapado por el catch de abajo.
        }
        return result.producto
    } catch (error) {//2. atrapa el result (error).
        throw { message: error.message }//3. vuelvo a lanzarlo solamente con el mensaje para enviarlo a la página de listar productos cuando haya un error.
    }
}

export const registrarProducto = async (producto) => {
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE, producto)
        if (result.status !== 200) {
            throw result//1. tira el result como un error para ser atrapado por el catch de abajo.
        }
        return result // devuelve el resultado exitoso en lugar de lanzar un error.
    } catch (error) {//2. atrapa el result (error).
        throw { message: error.message }//3. vuelvo a lanzarlo solamente con el mensaje para enviarle al handleSubmit del form cuando haya un error.
    }
}

export const actualizarProducto = async (id, producto) => {
    try {
        const result = await HTTP.PUT(URL.URL_API + ROUTE + '/' + id, producto)
        if (result.status !== 200) {
            throw result
        }
        return result
    } catch (error) {
        throw { message: error.message }
    }
}

export const eliminarProducto = async (id) => {
    try {
        const result = await HTTP.DELETE(URL.URL_API + ROUTE + '/' + id)
        if (result.status !== 200) {
            throw result
        }
        return result
    } catch (error) {
        throw { message: error.message }
    }
}