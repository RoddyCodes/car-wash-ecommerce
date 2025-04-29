import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Car Wash Supplies
      </Typography>
      <Typography>
        Browse our products and get everything you need to keep vehicles sparkling clean!
      </Typography>
    </Container>
  );
}
