// src/components/ProductDetails.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductDetails = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="subtitle1">{product.company}</Typography>
        <Typography variant="body1">{product.category}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Typography variant="body1">Rating: {product.rating}</Typography>
        <Typography variant="body1">Discount: {product.discount}%</Typography>
        <Typography variant="body1">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
        <Button variant="contained" color="primary">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
