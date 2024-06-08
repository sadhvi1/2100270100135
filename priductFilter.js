// src/components/ProductFilter.js
import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const ProductFilter = ({ categories, companies, onFilterChange, onResetFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select name="category" onChange={handleInputChange}>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select name="company" onChange={handleInputChange}>
          {companies.map((company) => (
            <MenuItem key={company} value={company}>{company}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField name="rating" label="Rating" type="number" onChange={handleInputChange} />
      <TextField name="priceRange" label="Price Range" onChange={handleInputChange} />
      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select name="availability" onChange={handleInputChange}>
          <MenuItem value="true">In Stock</MenuItem>
          <MenuItem value="false">Out of Stock</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={onResetFilters}>Reset Filters</Button>
    </div>
  );
};

export default ProductFilter;
