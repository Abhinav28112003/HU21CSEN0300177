import React, { useState, useEffect } from 'react';
import { getProducts } from '../api'; // Assume this fetches data from the API
import ProductCard from './ProductCard'; // Displays individual product details
import Filter from './Filter';
import Sort from './Sort';
import Pagination from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: 'Laptop', minPrice: 0, maxPrice: 10000 });
  const [sortBy, setSortBy] = useState('price');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(filters.category, 10, filters.minPrice, filters.maxPrice);
      setProducts(response.data);
    };
    fetchProducts();
  }, [filters, sortBy, page]);

  return (
    <div>
      <Filter onChange={setFilters} />
      <Sort onChange={setSortBy} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default ProductList;
