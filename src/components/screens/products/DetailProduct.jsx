import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerDetalleProducto } from '../../fetching/products.fetching'

const DetailProduct = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState(null)
    const [errorText, setErrorText] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productoObtenido = await obtenerDetalleProducto(id)
                setLoading(false)
                setProducto(productoObtenido)
                setErrorText('')
            } catch (error) {//4. captura el error que viene el products.fetching y setea el mensaje en el estado de errorText.
                //console.error('Error al obtener los productos:', error)
                setErrorText(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>DETALLE DEL PRODUCTO.</h1>
            {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}
            {loading ? <h2>CARGANDO DETALLE DEL PRODUCTO...</h2> :
                <ul>
                    
                        <li
                            key={producto.id}>{producto.titulo}{producto.descripcion}
                            <button>AÑADIR AL CARRITO.</button>
                        </li>
                    
                </ul>
            }
        </>
    )
}

export default DetailProduct