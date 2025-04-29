// src/pages/Cart.js
import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

export default function Cart() {
  const cartItems = []; // from context or state
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Cart
      </Typography>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: 1, borderRadius: 2 }}>
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ width: 80, height: 80, mr: 2, borderRadius: 1 }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">Qty: {item.quantity}</Typography>
                <Typography variant="body1">
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </Box>
              <Button variant="outlined" size="small">
                Remove
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'right', mt: 4 }}>
        <Button variant="contained" size="large">
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
}
