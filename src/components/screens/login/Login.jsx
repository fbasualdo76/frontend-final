import React, {useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'

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
            console.log(usuario)
            await login(usuario)
            setErrorText('')
            navigate('/home')
        } catch (error) {//4. capttura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            //console.log(error)
            setErrorText(error.message)
        }
    }
    return (
        <>
            <h1>LOGIN.</h1>
            {errorText && <span style={{ color: 'red' }}>{errorText}</span>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Ingrese su email:</label>
                    <input placeholder='joeDoe@gmail.com' id='email' name='email' value={'frankito@gmail.com'} />
                </div>
                <div>
                    <label htmlFor="password">Ingrese su contraeña:</label>
                    <input type='text' placeholder='******' id='password' name='password' value={'fran123'}/>
                </div>
                <span>Si no estás registrado, <Link to='/register'>registrate</Link></span>
                <button type='submit'>LOGIN</button>
            </form>
        </>
    )
}

export default Login