import React, { useContext, useState } from 'react';
import '..//..//Pages/CSS/ShopCategory.css';
import { ShopContext } from '../../Context/ShopContext';
import dropdown_icon from '..//..//Components/Assets/dropdown_icon.png';
import Item from '../Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(12);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-{Math.min(visibleProducts, all_product.length)}</span> out of {all_product.length} products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product
          .filter((item) => props.category === item.category)
          .slice(0, visibleProducts)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      {visibleProducts < all_product.length && (
        <div className='shopcategory-loadmore' onClick={handleLoadMore}>
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
