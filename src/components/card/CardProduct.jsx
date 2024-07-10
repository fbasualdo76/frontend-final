import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

const CardProduct = ({ producto }) => {
  return (
    <>
      <Card
        //producto={producto}
        sx={{ width: 260, height: 470 }}>

        <CardHeader
          title={producto.titulo}
          subheader={`Stock: ${producto.stock} - Precio: ${producto.precio}`}
        />
        <CardMedia
          component="img"
          height="200"
          image={producto.imagen}
          alt={`Imagen de ${producto.titulo}`}
        />
        <CardContent sx={{ height: 100 }}>
          <Typography variant="body2" color="text.secondary">
            {producto.descripcion}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>

          {/*<IconButton aria-label="add to favorites" onClick={() => handleLike(movie)}>
            <FavoriteIcon color={movie.isLiked ? "error" : "disabled"} />
           </IconButton>*/}

          <IconButton aria-label="Agregar al carrito">
            <ShoppingCartIcon />
          </IconButton>

          <Link to={`/editproduct/${producto.id}`}>
            <IconButton aria-label="Editar producto">
              <EditIcon />
            </IconButton>
          </Link>

          <Link to={`/deleteproduct/${producto.id}`}>
            <IconButton aria-label="Eliminar producto">
              <DeleteIcon />
            </IconButton>
          </Link>

          {/*<Button onClick={() => deleteMovie(movie.id)} variant="contained" color="primary">ELIMINAR</Button>*/}

        </CardActions>

      </Card >
    </>
  )
}
export default CardProduct