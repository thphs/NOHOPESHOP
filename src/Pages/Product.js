import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'; 
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'; 


const Product = () => {
  const { all_products } = useContext(ShopContext); 
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId)); 

  return (
    <div>
      <Breadcrumb product={product} /> 
      <ProductDisplay product={product} /> 
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
