import React, { useState } from 'react'
import { register } from '../../fetching/auth.fetching'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import CustomCard from '../../customComponents/CustomCard'
import CustomTextField from '../../customComponents/CustomTextField'

const Register = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()//previene que el formulario se envíe, porque si se envía la página se va a recargar.
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            console.log(usuario)
            await register(usuario)
            setErrorText('')
            navigate('/login')
        } catch (error) {//4. captura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            //console.log(error)
            setErrorText(error.message)
        }
    }    
    return (
        <>
            <CustomCard
                title="REGISTRO DE USUARIO."
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
                                label="E-mail"
                                variant="outlined"
                                name={"email"}
                                //defaultValue={"frankito@gmail.com"}
                                required={true}
                                fullWidth={true}
                            />
                        </div>
                        <div>
                            <CustomTextField
                                //id="outlined-basic"
                                label="Contraseña"
                                variant="outlined"
                                name={"password"}
                                //defaultValue={"fran123"}
                                required={true}
                                fullWidth={true}
                            />
                        </div>
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>REGISTRAR</Button>
                    </form>
                }
            >
            </CustomCard>
        </>
    )
}
export default Register