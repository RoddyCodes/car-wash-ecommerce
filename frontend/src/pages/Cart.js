import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Cart() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Your Cart</Typography>
      <Typography>Your cart is currently empty.</Typography>
    </Container>
  );
}
