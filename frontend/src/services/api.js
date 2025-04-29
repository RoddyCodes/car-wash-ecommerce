import axios from 'axios';

// Fetch all products
export const fetchProducts = () => axios.get('/api/products/');
