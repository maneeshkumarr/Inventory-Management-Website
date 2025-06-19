import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:8080/products';

// Define a TypeScript interface for Product
interface Product {
  id: number; // Ensure id is always a number
  name: string;
  description: string;
  quantity: number;
  price: number;
}

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(API_BASE_URL);
    return response.data;
  } catch (error) {
    // Handling AxiosError for better type inference
    if (axios.isAxiosError(error)) {
      console.error('Error fetching products:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Failed to fetch products. Please try again later.');
  }
};

// Add a new product
export const addProduct = async (product: Product): Promise<Product | void> => {
  try {
    const response = await axios.post<Product>(API_BASE_URL, product);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error adding product:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    alert('Failed to add product. Please try again later.');
  }
};

// Edit an existing product
export const editProduct = async (productId: number, updatedProduct: Product): Promise<Product> => {
  try {
    const response = await axios.put<Product>(`${API_BASE_URL}/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error editing product:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Failed to edit product. Please try again later.');
  }
};

// Delete a product
export const deleteProduct = async (productId: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${productId}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error deleting product:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Failed to delete product. Please try again later.');
  }
};
