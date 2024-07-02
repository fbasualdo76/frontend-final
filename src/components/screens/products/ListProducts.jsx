import React, { useState, useEffect } from 'react'
import { obtenerProductos } from '../../fetching/products.fetching'
import { Link } from 'react-router-dom'

const Products = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorText, setErrorText] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosObtenidos = await obtenerProductos()
                setLoading(false)
                setProductos(productosObtenidos)
                setErrorText('')
            } catch (error) {//4. captura el error que viene el products.fetching y setea el mensaje en el estado de errorText.
                //console.error('Error al obtener los productos:', error)
                setErrorText(error.message)
            }
        }
        fetchData()
    }, [])

    //console.log(productos)//mostrar aca que me devuelve el array de objetos.
    return (
        <>
            <h1>LISTADO DE PRODUCTOS.</h1>
            {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}
            {loading ? <h2>CARGANDO PRODUCTOS...</h2> :
                <ul>
                    {productos.map((producto) => (
                        <li
                            key={producto.id}>{producto.titulo}{producto.descripcion}
                            <Link to={`/detailproduct/${producto.id}`}>VER DETALLE</Link>
                            <Link to={`/editproduct/${producto.id}`}>EDITAR PRODUCTO</Link>
                        </li>
                    ))}
                </ul>

            }
        </>
    )
}

export default Products