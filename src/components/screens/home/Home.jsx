import React, { useEffect, useState } from 'react'
import NavBar from '../../navBar/NavBar'
import ListProducts from '../products/ListProducts'


const Home = () => {
  //const [favorites, setFavorites] = useState(false);
  //estados de Modal.
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <NavBar /*setFavorites={setFavorites} */handleOpen={handleOpen} />
      <ListProducts/>
    </>
  )
}

export default Home