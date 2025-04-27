import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const addProduct = async (product: any) => {
  try {
    const response = await axios.post(API_BASE_URL, product);
    return response.data;
  } catch (error) {
    alert('Failed to add product: ' + (error as Error).message);
  }
};

export const editProduct = async (productId: number, updatedProduct: any) => {
  const response = await axios.put(`${API_BASE_URL}/${productId}`, updatedProduct);
  return response.data;
};

export const deleteProduct = async (productId: number) => {
  const response = await axios.delete(`${API_BASE_URL}/${productId}`);
  return response.data;
};
