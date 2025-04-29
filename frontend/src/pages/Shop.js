// src/pages/Shop.js
import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products.map((prod) => (
          <Grid item key={prod.id} xs={12} sm={6} md={4}>
            <ProductCard product={prod} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
