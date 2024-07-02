import React, {useState } from 'react'
import { register } from '../../fetching/auth.fetching'
import { useNavigate } from 'react-router-dom'

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
            <h1>REGISTRO.</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Ingrese su email:</label>
                    <input placeholder='joeDoe@gmail.com' id='email' name='email' />
                </div>
                <div>
                    <label htmlFor="password">Ingrese su contraeña:</label>
                    <input type='text' placeholder='******' id='password' name='password' />
                </div>
                <button type='submit'>REGISTRAR</button>
            </form>
        </>
    )
}

export default Register