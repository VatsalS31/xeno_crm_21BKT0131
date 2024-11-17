// src/components/CampaignList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/campaigns');
                setCampaigns(response.data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        };
        fetchCampaigns();
    }, []);

    return (
        <div>
            <h2>Campaign List</h2>
            <ul>
                {campaigns.map(campaign => (
                    <li key={campaign._id}>
                        {campaign.name} - {campaign.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CampaignList;
