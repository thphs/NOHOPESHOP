import React from "react";
import { useState } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'
import { useContext } from "react";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    const isCartEmpty = Object.values(cartItems).every(quantity => quantity === 0);
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoCodeEntered, setPromoCodeEntered] = useState(false);
    const handlePromoCodeSubmit = () => {
        // Add logic to check and apply the promo code
        // For simplicity, let's assume a promo code "EXAMPLE" gives a 10% discount
        if (promoCode.toLowerCase() === 'giảm 100k thui nha') {
            setPromoApplied(true);
            setPromoCodeEntered(true); // Set promoCodeEntered to true when a valid code is entered
        } else {
            // Handle incorrect promo code scenario
            alert('Invalid promo code. Please try again.');
            setPromoCodeEntered(false); // Set promoCodeEntered to false on invalid code
        }
    };

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e._id] > 0) {
                    return (
                        <div key={e._id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    onClick={() => { removeFromCart(e.id) }}
                                    alt=""
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button disabled={isCartEmpty}>PROCEED TO CHECKOUT</button>
                    {isCartEmpty && <p>Your cart is empty.</p>}
                </div>
                <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input
                        type="text"
                        placeholder="promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button onClick={handlePromoCodeSubmit}>Submit</button>
                </div>
                {promoCodeEntered && promoApplied && <p style={{ color: 'green' }}>Promo code has been applied successfully!</p>}
            </div>
            </div>
        </div>
    );
}

export default CartItems;
