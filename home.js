// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = ({ products }) => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Our E-Commerce Store
