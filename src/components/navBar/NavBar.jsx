import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyToken } from "../fetching/auth.fetching";

const NavBar = ({ window/*, handleOpen*/ }) => {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const navItems = ['AGREGAR PRODUCTO'/*,'OTRO LINK'*/];

  const handleNavigation = (path) => {
    verifyToken()
      .then(result => {
        //console.log(result);
        if (result && result.status === 200) {
          navigate(path); // Navegar al path especificado
        } else {
          navigate('/login'); // Redirigir a la página de inicio de sesión
        }
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        navigate('/login'); // Redirigir a la página de inicio de sesión en caso de error
      });
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (item) => {
    switch (item) {
      case 'AGREGAR PRODUCTO':
        handleNavigation('/registerproduct');
        break;
      default:
        console.log('No se reconoce la acción');
    }
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#1976d2', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#fff' }}>

        <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }} onClick={() => handleNavigation('/')}>
          Mis productos
        </Link>

      </Typography>
      <Divider sx={{ backgroundColor: '#fff' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item)}>
              <ListItemText primary={item} sx={{ color: '#fff' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }} onClick={() => handleNavigation('/')}>
              Mis productos
            </Link>

          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => handleClick(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
export default NavBar;