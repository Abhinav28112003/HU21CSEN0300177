import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const getProducts = (company, category, top, minPrice, maxPrice) => {
  return axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products`, {
    params: { top, minPrice, maxPrice },
  });
};

export const getProductDetails = (productId) => {
  // Implement the API call to fetch product details by ID
};
const generateUniqueID = (productName, company) => `${company}-${productName.replace(/\s+/g, '-')}`;
