import { HTTP, URL } from "./http"
const ROUTE = '/api/products'

export const obtenerProductos = async () => {//obtiene todos los productos
    try {
        const result = await HTTP.GET(URL.URL_API + ROUTE, {})
        //console.log('RESULT', result.productos)
        if (result.status !== 200) {            
            //throw new Error('Error al obtener los productos')
            throw { status: 400, message: 'Error al obtener los productos' }
            //throw result
        }
        //const data = await result.json()
        //return data
        return result.productos
        
    } catch (error) {
        //console.log(error)
        //console.error('Error al obtener los productos:', error)
        throw { message: error.message }
    }
}