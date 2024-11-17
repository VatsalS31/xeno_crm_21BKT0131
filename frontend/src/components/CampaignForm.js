import React, { useState } from 'react';
import axios from 'axios';

const CampaignForm = () => {
    const [name, setName] = useState('');
    const [audience, setAudience] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/campaigns', {
            name,
            audience: audience.split(','), // Split audience input by comma
            message,
        });
        // Reset form or handle success
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Campaign Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Audience (comma-separated IDs)" value={audience} onChange={(e) => setAudience(e.target.value)} required />
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit">Create Campaign</button>
        </form>
    );
};

export default CampaignForm;
