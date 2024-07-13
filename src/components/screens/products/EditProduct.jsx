import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CustomTextField from '../../customComponents/CustomTextField'
import { obtenerDetalleProducto, actualizarProducto } from '../../fetching/products.fetching'
import { Button } from '@mui/material';
import CustomCard from '../../customComponents/CustomCard';
import { verifyToken } from '../../fetching/auth.fetching';

const EditProduct = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState(null)
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
                imagen: event.target.imagen.value,
                descripcion: event.target.descripcion.value,
                stock: event.target.stock.value,
                precio: event.target.precio.value,
                codigo: event.target.codigo.value
            }
            await actualizarProducto(id, producto)
            setErrorText('')
            navigate('/')
        } catch (error) {//4. captura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            setErrorText(error.message)
        }
    }
    return (
        <>
            {loading ? <h2>CARGANDO ...</h2> :
                <CustomCard
                    title="EDITAR PRODUCTO."
                    error={errorText}
                    formContent={
                        <form style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItem: "center",
                            //height: "520px",
                        }} onSubmit={handleSubmit}>
                            <div>
                                <CustomTextField
                                    //id="outlined-basic"
                                    label="Título"
                                    variant="outlined"
                                    name={"titulo"}
                                    defaultValue={producto.titulo}
                                    required={true}
                                    fullWidth={true}
                                />
                            </div>
                            <div>
                                <CustomTextField
                                    //id="outlined-basic"
                                    label="URL de la imagen"
                                    variant="outlined"
                                    name={"imagen"}
                                    defaultValue={producto.imagen}
                                    required={true}
                                    fullWidth={true}
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
                                    fullWidth={true}
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
                                    fullWidth={true}
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
                                    fullWidth={true}
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
                                    fullWidth={true}
                                />
                            </div>
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>EDITAR</Button>
                        </form>
                    }
                >
                </CustomCard>
            }
        </>
    )
}
export default EditProduct