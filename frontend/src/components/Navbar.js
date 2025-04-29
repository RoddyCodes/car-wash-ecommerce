import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const theme = useTheme();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: theme.palette.common.white,
            textDecoration: 'none',
          }}
        >
          Car Wash Supplies
        </Typography>
        <Button color="inherit" component={Link} to="/shop">
          Shop
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
}
