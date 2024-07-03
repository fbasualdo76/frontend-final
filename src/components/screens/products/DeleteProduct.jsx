import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eliminarProducto } from '../../fetching/products.fetching';

const DeleteProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [errorText, setErrorText] = useState('')

  const handleDelete = async () => {
    try {
      await eliminarProducto(id)
      navigate('/products')
    } catch (error) {
      setErrorText(error.message)
    }
  }

  return (
    <>
      <h1>ELIMINAR PRODUCTO</h1>
      {errorText && <span style={{ color: 'red' }}>{errorText}</span>}
      <p>¿Estás seguro de que deseas eliminar este producto?</p>
      <button onClick={handleDelete}>ELIMINAR PRODUCTO</button>
    </>
  );
}

export default DeleteProduct;