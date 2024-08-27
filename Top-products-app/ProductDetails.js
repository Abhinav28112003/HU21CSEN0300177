import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductDetails(id);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.imageUrl} alt={product.productName} />
      <h1>{product.productName}</h1>
      <p>Company: {product.company}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;
