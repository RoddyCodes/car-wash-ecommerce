import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <Grid container spacing={3}>
      {products.map((prod) => (
        <Grid item xs={12} sm={6} md={4} key={prod.id}>
          <ProductCard product={prod} />
        </Grid>
      ))}
    </Grid>
  );
}
