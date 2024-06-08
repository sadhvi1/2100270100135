// src/components/Cart.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <Typography variant="body2">${item.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">
        Total: ${calculateTotal()}
      </Typography>
      <Button variant="contained" color="primary">
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default Cart;
