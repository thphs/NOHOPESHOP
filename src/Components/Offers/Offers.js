import React, { useRef } from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
import { useNavigate } from 'react-router-dom'; 

  const Offers = () => {
    const navigate = useNavigate();
    const offersRef = useRef(null); // Tạo ref cho phần tử cần cuộn đến
  
    const handleCheckNow = () => {
      // Chuyển hướng đến một trang cụ thể
      navigate('/mens');
  
      // Cuộn xuống phần tử cần cuộn đến
      if (offersRef.current) {
        offersRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
      <div className='offers'>
          <div className="offers-left">
              <h1>Exclusive</h1>
              <h1>Offers For You</h1>
              <p>ONLY ON BEST SELLERS PRODUCTS</p>
              <button onClick={handleCheckNow}>Check Now</button>
          </div>
          <div className="offers-right">
              <img src={exclusive_image} alt="" />
          </div>
      </div>
    )
  }

  export default Offers