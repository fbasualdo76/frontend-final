import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eliminarProducto } from '../../fetching/products.fetching';
import { Box, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const DeleteProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [errorText, setErrorText] = useState('')

  const handleDelete = async () => {
    try {
      await eliminarProducto(id)
      navigate('/home')
    } catch (error) {
      setErrorText(error.message)
    }
  }

  return (
    <>
      <Box sx={style}>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          Eliminar producto.
        </Typography>

        {errorText && <span style={{ color: 'red' }}>{errorText}</span>}{/*si hay error lo muestra aca.*/}

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ¿Estás seguro de que deseas eliminar este producto?.
        </Typography>

        <Button onClick={handleDelete} type="submit" variant="contained" color="primary" sx={{ mt: 1 }} fullWidth>ELIMINAR</Button>
      </Box>
    </>
  );
}

export default DeleteProduct;