import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/screens/login/Login'
import Register from './components/screens/register/Register'
import Home from './components/screens/home/Home'

import { verifyToken } from './components/fetching/auth.fetching'

import ListProducts from './components/screens/products/ListProducts'
import RegisterProduct from './components/screens/products/RegisterProduct'
import DetailProduct from './components/screens/products/DetailProduct'
import EditProduct from './components/screens/products/EditProduct'
import DeleteProduct from './components/screens/products/DeleteProduct'

const RouterApp = () => {
  //En el frontend verificamos el token apenas entra el usuario, entonces, si el usuario ya está logueado hacemos una redirección.
  const navigate = useNavigate()

  useEffect(() => {
    verifyToken()
      .then(resultado => {//.then es otra forma de resolver promesas. El resultado es el retorno de la función asíncrona verifyToken.
        //console.log(resultado)
        if (resultado.status == 200) {
        navigate('/home')
        }
        else {
        navigate('/login')
        }

        //if (!resultado.status == 200) {
          //navigate('/login')
        //}

      })

  }, [])

  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/register' element={<Register />} />

      <Route path='/login' element={<Login />} />

      <Route path='/home' element={<Home />} />

      <Route path='/registerproduct' element={<RegisterProduct />} />

      <Route path='/products' element={<ListProducts />} />

      <Route path='/detailproduct/:id' element={<DetailProduct />}/>

      <Route path='/editproduct/:id' element={<EditProduct />}/>

      <Route path='/deleteproduct/:id' element={<DeleteProduct />}/>
    </Routes>
  )
}

export default RouterApp