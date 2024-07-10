import React, { useEffect, useState } from 'react'
import NavBar from '../../navBar/NavBar'
import RegisterProduct from '../products/RegisterProduct'
import ListProducts from '../products/ListProducts'

const Home = () => {
  //const [favorites, setFavorites] = useState(false);

  //estados de Modal.
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //estados de crear y eliminar un producto.
  const [productoCreado, setProductoCreado] = useState(false)
  
  return (
    <>
      <NavBar
        //setFavorites={setFavorites}
        handleOpen={handleOpen}
      />
      <RegisterProduct
        open={open}
        handleClose={handleClose}
        setProductoCreado={setProductoCreado}
      />
      <ListProducts 
      productoCreado={productoCreado}/>
    </>
  )
}

export default Home