// src/components/Footer.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', padding: '10px 0', backgroundColor: '#f8f8f8' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' E-Commerce Website. All rights reserved.'}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
