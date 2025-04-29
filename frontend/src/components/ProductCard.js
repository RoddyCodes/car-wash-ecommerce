import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, CardActions, Button
} from '@mui/material';

import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Card>
      {product.image_url && (
        <CardMedia
          component="img"
          height="140"
          image={product.image_url}
          alt={product.name}
        />
      )}
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
