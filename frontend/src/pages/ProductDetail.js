import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}/`)
      .then(res => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product) return <Container sx={{ textAlign:'center', mt:4 }}><CircularProgress/></Container>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>{product.name}</Typography>
      {product.image_url && <img src={product.image_url} alt={product.name} width="100%" />}
      <Typography sx={{ mt:2 }}>${product.price}</Typography>
      <Typography sx={{ mt:2 }}>{product.description}</Typography>
      <Button variant="contained" sx={{ mt:3 }}>Add to Cart</Button>
    </Container>
  );
}
