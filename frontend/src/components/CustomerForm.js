import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [totalSpending, setTotalSpending] = useState('');
    const [lastVisited, setLastVisited] = useState('');
    const [visitCount, setVisitCount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/customers', {
            name,
            email,
            totalSpending,
            lastVisited,
            visitCount,
        });
        // Reset form or handle success
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="number" placeholder="Total Spending" value={totalSpending} onChange={(e) => setTotalSpending(e.target.value)} required />
            <input type="date" placeholder="Last Visited" value={lastVisited} onChange={(e) => setLastVisited(e.target.value)} required />
            <input type="number" placeholder="Visit Count" value={visitCount} onChange={(e) => setVisitCount(e.target.value)} required />
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default CustomerForm;
