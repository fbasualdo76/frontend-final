import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CustomTextField from '../../customComponents/CustomTextField'
import { obtenerDetalleProducto } from '../../fetching/products.fetching'
import { actualizarProducto } from '../../fetching/products.fetching'

const EditProduct = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState(null)
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()

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

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()//previene que el formulario se envíe, porque si se envía la página se va a recargar.
            const producto = {
                titulo: event.target.titulo.value,
                descripcion: event.target.descripcion.value,
                stock: event.target.stock.value,
                precio: event.target.precio.value,
                codigo: event.target.codigo.value
            }
            await actualizarProducto(id,producto)
            setErrorText('')
            navigate('/products')
        } catch (error) {//4. captura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            setErrorText(error.message)
        }
    }
    return (
        <>
            <h1>EDITAR PRODUCTO.</h1>
            {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}
            {loading ? <h2>CARGANDO FORMULARIO PARA EDITAR EL PRODUCTO...</h2> :
                <form onSubmit={handleSubmit}>
                    <div>
                        <CustomTextField
                            //id="outlined-basic"
                            label="Título"
                            variant="outlined"
                            name={"titulo"}
                            defaultValue={producto.titulo}
                            required={true}
                            fullWidth={false}
                        />
                    </div>
                    <div>
                        <CustomTextField
                            //id="outlined-basic"
                            label="Descripción"
                            variant="outlined"
                            name={"descripcion"}
                            defaultValue={producto.descripcion}
                            required={true}
                            fullWidth={false}
                        />
                    </div>
                    <div>
                        <CustomTextField
                            //id="outlined-basic"
                            label="Stock"
                            variant="outlined"
                            name={"stock"}
                            defaultValue={producto.stock}
                            required={true}
                            fullWidth={false}
                        />
                    </div>
                    <div>
                        <CustomTextField
                            //id="outlined-basic"
                            label="Precio"
                            variant="outlined"
                            name={"precio"}
                            defaultValue={producto.precio}
                            required={true}
                            fullWidth={false}
                        />
                    </div>
                    <div>
                        <CustomTextField
                            //id="outlined-basic"
                            label="Código"
                            variant="outlined"
                            name={"codigo"}
                            defaultValue={producto.codigo}
                            required={true}
                            fullWidth={false}
                        />
                    </div>
                    {/*<div>
                    <label htmlFor="email">Ingrese su email:</label>
                    <input placeholder='joeDoe@gmail.com' id='email' name='email' />
                </div>
                <div>
                    <label htmlFor="password">Ingrese su contraeña:</label>
                    <input type='text' placeholder='******' id='password' name='password' />
                </div>*/}
                    <button type='submit'>EDITAR</button>
                </form>
            }
        </>
    )
}
export default EditProduct