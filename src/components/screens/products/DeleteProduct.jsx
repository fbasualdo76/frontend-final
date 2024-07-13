import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eliminarProducto } from '../../fetching/products.fetching';
import { Button } from '@mui/material';
import CustomCard from '../../customComponents/CustomCard';
import { verifyToken } from '../../fetching/auth.fetching';

const DeleteProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [errorText, setErrorText] = useState('')

  const handleDelete = async () => {
    try {
      await eliminarProducto(id)
      navigate('/')
    } catch (error) {
      setErrorText(error.message)
    }
  }

  useEffect(() => {
    verifyToken()
      .then(result => {//.then es otra forma de resolver promesas. El result es el retorno de la función asíncrona en fetching/auth.fetching.js/verifyToken.
        //console.log(result)
        if (!result.status == 200) {
          navigate('/login')
        }
      })
  }, [])

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