import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'
import CustomTextField from '../../customComponents/CustomTextField'
import { Button, Grid } from '@mui/material'
import CustomCard from '../../customComponents/CustomCard'

const Login = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()//previene que el formulario se envíe, porque si se envía la página se va a recargar.
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            await login(usuario)
            setErrorText('')
            navigate('/home')
        } catch (error) {//4. captura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            setErrorText(error.message)
        }
    }
    return (
        <>
            <CustomCard
                title="LOGIN"
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
                                defaultValue={"frankito@gmail.com"}
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
                                defaultValue={"fran123"}
                                required={true}
                                fullWidth={true}
                            />
                        </div>
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>LOGIN</Button>
                    </form>
                }
                detail="Si no estás registrado, "
                linkTo="/register"
                linkText="Registrate"
            >
            </CustomCard>

            {/*<h1>LOGIN.</h1>*/}
            {/*{errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}
            {/*<form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Ingrese su email:</label>
                    <input placeholder='joeDoe@gmail.com' id='email' name='email' value={'frankito@gmail.com'} />
                </div>
                <div>
                    <label htmlFor="password">Ingrese su contraeña:</label>
                    <input type='text' placeholder='******' id='password' name='password' value={'fran123'} />
                </div>
                <span>Si no estás registrado, <Link to='/register'>registrate</Link></span>
                <button type='submit'>LOGIN</button>
            </form>*/}

        </>
    )
}
export default Login