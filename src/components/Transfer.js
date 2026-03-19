// src/components/Transfer.js
import React, { useState } from 'react';

const Transfer = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleTransfer = () => {
        // Add transfer logic here
        console.log(`Transferring ${amount} to ${phoneNumber}`);
    };

    return (
        <div>
            <h2>Quick Transfer</h2>
            <input 
                type="text" 
                placeholder="Phone Number" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
            />
            <button onClick={handleTransfer}>Transfer</button>
        </div>
    );
};

export default Transfer;