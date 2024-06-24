import React, { useState, useEffect } from 'react'
import { obtenerProductos } from '../../fetching/products.fetching'


const Products = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosObtenidos = await obtenerProductos();
                setProductos(productosObtenidos);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        }
        fetchData()
    }, [])
    console.log(productos)//mostrar aca que me devuelve el array de objetos.
    return (
        <>
            <h1>Listado de productos.</h1>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>{producto.titulo}{producto.descripcion}</li>
                ))}
            </ul>
        </>
    )
}

export default Products