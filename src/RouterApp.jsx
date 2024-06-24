import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/screens/login/Login'
import Register from './components/screens/register/Register'
import Home from './components/screens/home/Home'
import { verifyToken } from './components/fetching/auth.fetching'
import Products from './components/screens/products/Products'




const RouterApp = () => {
  //En el frontend verificamos el token apenas entra el usuario, entonces, si el usuario ya está logueado hacemos una redirección.
  const navigate = useNavigate()

  useEffect(() => {
    verifyToken()
    .then(resultado => {//.then es otra forma de resolver promesas. El resultado es el retorno de la función asíncrona verifyToken.
      //console.log(resultado)
      
      //if (resultado.status == 200) {
        //navigate('/home')
      //}
      //else {
        //navigate('/login')
      //}

      if (!resultado.status == 200) {
        navigate('/login')
      }

    })

  }, [])

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<Products/>} />
    </Routes>
  )
}

export default RouterApp