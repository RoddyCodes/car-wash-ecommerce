// src/pages/Checkout.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

export default function Checkout() {
  const [form, setForm] = useState({ name: '', address: '', card: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit order logic...
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Shipping Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Card Details"
          name="card"
          value={form.card}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" size="large">
          Place Order
        </Button>
      </Box>
    </Container>
  );
}
