import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTextField from '../../customComponents/CustomTextField'
import { registrarProducto } from '../../fetching/products.fetching'
import { Button } from '@mui/material';
import CustomCard from '../../customComponents/CustomCard';
import { verifyToken } from '../../fetching/auth.fetching';

const RegisterProduct = () => {
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
            navigate('/'); // redirige a la página de inicio
        } catch (error) {//4. captura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            setErrorText(error.message)
        }
    }

    useEffect(() => {
        verifyToken()
            .then(result => {//.then es otra forma de resolver promesas. El result es el retorno de la función asíncrona en fetching/auth.fetching.js/verifyToken.
                //console.log(result)
                if (!result.status == 200) {
                    navigate('/login')
                }
            })
    }, [])

    return (
        <>
            <CustomCard
                title="AGREGAR PRODUCTO."
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
                                //defaultValue={false}
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
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>AGREGAR</Button>
                    </form>
                }
            >
            </CustomCard>
        </>
    )
}
export default RegisterProduct