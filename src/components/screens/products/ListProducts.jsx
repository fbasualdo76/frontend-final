import React, { useState, useEffect } from 'react'
import { obtenerProductos } from '../../fetching/products.fetching'
import { Link } from 'react-router-dom'
import CardProduct from '../../card/CardProduct'

const ListProducts = ({ productoCreado }) => {
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
    }, [productoCreado])

    //console.log(productos)//mostrar aca que me devuelve el array de objetos.
    return (
        <>
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
                    marginTop: '54px', // Add margin at the top
                }}>

                    {productos.map((producto) => (
                        <Link key={producto.id} to={`/detailproduct/${producto.id}`} style={{ textDecoration: 'none' }}>
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