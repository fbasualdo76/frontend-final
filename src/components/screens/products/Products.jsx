import React, { useState, useEffect } from 'react'
import { obtenerProductos } from '../../fetching/products.fetching'


const Products = () => {
    const [productos, setProductos] = useState([])
    const [errorText, setErrorText] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosObtenidos = await obtenerProductos()
                setProductos(productosObtenidos)
                //setErrorText('')
            } catch (error) {//4. captura el error que viene el products.fetching y setea el mensaje en el estado de errorText.
                //console.error('Error al obtener los productos:', error)
                setErrorText(error.message)
            }
        }
        fetchData()
    }, [])
    console.log(productos)//mostrar aca que me devuelve el array de objetos.
    return (
        <>
            <h1>Listado de productos.</h1>
            {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>{producto.titulo}{producto.descripcion}</li>
                ))}
            </ul>
        </>
    )
}

export default Products