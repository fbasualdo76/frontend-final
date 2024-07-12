import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerDetalleProducto } from '../../fetching/products.fetching'
import { Button, CardMedia } from '@mui/material'
import CustomCard from '../../customComponents/CustomCard'

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
            {loading ? <h2>CARGANDO ...</h2> :
                <div>
                    <CustomCard key={producto.id}
                        title={producto.titulo}
                        error={errorText}
                        formContent={
                            <div>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={producto.imagen}
                                    alt={`Imagen de ${producto.titulo}`}
                                />
                            </div>
                        }
                        detail={
                            <div>
                                <div>{producto.descripcion}</div>
                                <div>STOCK: {producto.stock}</div>
                                <div>PRECIO: {producto.precio}</div>
                            </div>
                        }
                        buttonText={
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }} fullWidth>AGREGAR AL CARRITO</Button>
                        }
                    >
                    </CustomCard >
                </div>

                /*<ul>
                    <li
                        key={producto.id}>{producto.titulo}{producto.descripcion}
                        <button>AÑADIR AL CARRITO.</button>
                    </li>
                </ul>*/
            }
        </>
    )
}
export default DetailProduct