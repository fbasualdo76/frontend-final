import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTextField from '../../customComponents/CustomTextField'
import { registrarProducto } from '../../fetching/products.fetching'
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

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

const RegisterProduct = ({ open, handleClose, setProductoCreado }) => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
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
            await registrarProducto(producto)
            setErrorText('')
            handleClose() // cierra el modal.
            setProductoCreado(true)
            //navigate('/home'); // redirige a la página de inicio
        } catch (error) {//4. captura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            setErrorText(error.message)
        }
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style}>
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItem: "center",
                        //height: "520px",
                    }} onSubmit={handleSubmit}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Agregar producto.
                        </Typography>

                        {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}

                        {/*<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            A modo de prueba se cargan valores por defecto.
                        </Typography}>*/}

                        <div>
                            <CustomTextField
                                //id="outlined-basic"
                                label="Título"
                                variant="outlined"
                                name={"titulo"}
                                //defaultValue={false}
                                required={true}
                                fullWidth={true}
                            />
                        </div>
                        <div>
                            <CustomTextField
                                //id="outlined-basic"
                                label="Imagen"
                                variant="outlined"
                                name={"imagen"}
                                //defaultValue={false}
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
                                //defaultValue={false}
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
                                //defaultValue={false}
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
                                //defaultValue={false}
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
                                //defaultValue={false}
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
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>AGREGAR</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default RegisterProduct