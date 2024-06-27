import React, { useState } from 'react'
import { register } from '../../fetching/auth.fetching'
import { useNavigate } from 'react-router-dom'
import CustomTextField from '../../customComponents/CustomTextField'
import { registrarProducto } from '../../fetching/products.fetching'

const RegisterProduct = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
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
            console.log(producto)
            await registrarProducto(producto)
            setErrorText('')
            navigate('/products')
        } catch (error) {//4. capttura el error que viene el auth.fetching y setea el mensaje en el estado de errorText.
            console.log(error)
            setErrorText(error.message)
        }
    }
    return (
        <>
            <h1>REGISTRAR PRODUCTO.</h1>
            {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <CustomTextField
                        //id="outlined-basic"
                        label="Título"
                        variant="outlined"
                        name={"titulo"}
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
                <button type='submit'>REGISTRAR</button>
            </form>
        </>
    )
}

export default RegisterProduct