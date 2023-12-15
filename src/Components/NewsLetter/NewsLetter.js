import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        // Here you can add logic to handle the subscription, e.g., send a request to your server

        // For the sake of this example, let's just set subscribed to true
        setSubscribed(true);

        // Set a timer to reset the subscribed state after 3000 milliseconds (3 seconds)
        setTimeout(() => {
            setSubscribed(false);
        }, 3000);
    };

    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input
                    type="email"
                    placeholder='Your Email id'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
            {subscribed &&<p>Thank you for subscribing!</p>}
        </div>
    );
}

export default NewsLetter;
