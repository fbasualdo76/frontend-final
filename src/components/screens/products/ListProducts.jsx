import React, { useState, useEffect } from 'react'
import { obtenerProductos } from '../../fetching/products.fetching'
import { Link } from 'react-router-dom'
import CardProduct from '../../card/CardProduct'

const ListProducts = () => {
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
                <div style={{
                    //backgroundColor: "black",
                    display: "flex",
                    //minHeight: "100vh",
                    //justifyContent: "center",
                    //alignItems: "center",
                    gap: "30px",
                    padding: "20px",
                    flexWrap: "wrap",
                    marginTop: '64px', // Add margin at the top
                }}>

                    {productos.map((producto) => (
                        <Link key={producto.id} to={`/detailproduct/${producto.id}`}>
                            <CardProduct
                                producto={producto}
                            />
                        </Link>
                    ))}

                </div>
            }
        </>
    )
}
export default ListProducts