import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CustomTextField from '../../customComponents/CustomTextField'
import { obtenerDetalleProducto, actualizarProducto } from '../../fetching/products.fetching'
import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

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
                imagen: event.target.imagen.value,
                descripcion: event.target.descripcion.value,
                stock: event.target.stock.value,
                precio: event.target.precio.value,
                codigo: event.target.codigo.value
            }
            await actualizarProducto(id, producto)
            setErrorText('')
            navigate('/home')
        } catch (error) {//4. captura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            setErrorText(error.message)
        }
    }
    return (
        <>
            <Box sx={style}>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Editar producto.
                </Typography>

                {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}

                {/*<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Alguna descripción.
                </Typography}>*/}

                {loading ? <h2>CARGANDO FORMULARIO...</h2> :
                    <form onSubmit={handleSubmit}>
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
                        {/*<div>
                    <label htmlFor="email">Ingrese su email:</label>
                    <input placeholder='joeDoe@gmail.com' id='email' name='email' />
                </div>
                <div>
                    <label htmlFor="password">Ingrese su contraeña:</label>
                    <input type='text' placeholder='******' id='password' name='password' />
                </div>*/}
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}fullWidth>EDITAR</Button>
                    </form>
                }
            </Box>
            
        </>
    )
}
export default EditProduct