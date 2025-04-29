// src/pages/Home.js
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', color: 'common.white' }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Quality Car Wash Supplies
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          Shop Now
        </Button>
      </Container>
    </Box>
  );
}
