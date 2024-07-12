import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eliminarProducto } from '../../fetching/products.fetching';
import { Button } from '@mui/material';
import CustomCard from '../../customComponents/CustomCard';

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
      <CustomCard
        title="ELIMINAR PRODUCTO."
        error={errorText}
        subtitle="¿Estás seguro de que deseas eliminar este producto?"
        formContent={
          <Button onClick={handleDelete} type="submit" variant="contained" color="primary" sx={{ mt: 1 }} fullWidth>ELIMINAR</Button>
        }
      >
      </CustomCard>
    </>
  );
}
export default DeleteProduct;