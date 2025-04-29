// src/services/api.js
import axios from 'axios';

/**
 * Create a centralized Axios instance with
 * baseURL, timeout, and JSON headers.
 */
const api = axios.create({
  baseURL: '/api',             // all requests use this root :contentReference[oaicite:4]{index=4}
  timeout: 5000,               // auto-timeout after 5s :contentReference[oaicite:5]{index=5}
  headers: { 
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all products.
 * @returns {Promise<Array>} Array of product objects
 */
export async function fetchProducts() {
  const response = await api.get('/products/'); 
  return response.data;           // return only the JSON payload 
}

/**
 * Fetch a single product by ID.
 * @param {string|number} id
 * @returns {Promise<Object>} Product object
 */
export async function fetchProductById(id) {
  const response = await api.get(`/products/${id}/`); 
  return response.data;           // keeps UI code clean 
}

/**
 * Add an item to the user's cart.
 * @param {Object} item  e.g., { productId, quantity }
 * @returns {Promise<Object>} Updated cart or confirmation
 */
export async function addToCart(item) {
  const response = await api.post('/cart/', item);
  return response.data;           // easy to mock in tests 
}

/**
 * Place an order.
 * @param {Object} order  e.g., { userId, items, total }
 * @returns {Promise<Object>} Order confirmation
 */
export async function placeOrder(order) {
  const response = await api.post('/orders/', order);
  return response.data;           // separation of concerns 
}

// — Assign the service object to a variable …
const apiService = {
    fetchProducts,
    fetchProductById,
    addToCart,
    placeOrder,
  };
  
  // …then export it as the default
  export default apiService;
