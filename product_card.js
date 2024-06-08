// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="subtitle1">{product.company}</Typography>
        <Typography variant="body2" color="textSecondary">{product.category}</Typography>
        <Typography variant="body2" color="textSecondary">${product.price}</Typography>
        <Typography variant="body2" color="textSecondary">Rating: {product.rating}</Typography>
        <Button variant="contained" color="primary">
          <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
