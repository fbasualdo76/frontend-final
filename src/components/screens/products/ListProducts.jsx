import React, { useState, useEffect } from 'react'
import { obtenerProductos } from '../../fetching/products.fetching'
import { Link, useNavigate } from 'react-router-dom'
import CardProduct from '../../card/CardProduct'
import { verifyToken } from '../../fetching/auth.fetching'

const ListProducts = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        verifyToken()
            .then(result => {//.then es otra forma de resolver promesas. El result es el retorno de la función asíncrona en fetching/auth.fetching.js/verifyToken.
                //console.log(result)
                if (!result.status == 200) {
                    navigate('/login')
                }
            })

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
            {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}
            {loading ? <h2>CARGANDO PRODUCTOS...</h2> :
                <div style={{
                    //backgroundColor: "black",
                    display: "flex",
                    //minHeight: "100vh",
                    justifyContent: "space-between",
                    //alignItems: "center",
                    gap: "30px",
                    padding: "20px",
                    flexWrap: "wrap",
                    marginTop: '60px', // Add margin at the top
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