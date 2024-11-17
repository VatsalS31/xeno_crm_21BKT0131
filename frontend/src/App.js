import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link here
import CustomerForm from './components/CustomerForm';
import CampaignForm from './components/CampaignForm';
import CustomerList from './components/CustomerList';
import CampaignList from './components/CampaignList';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Mini CRM & Campaign Management</h1>
                <nav>
                    <Link to="/add-customer">Add Customer</Link> | 
                    <Link to="/create-campaign">Create Campaign</Link> | 
                    <Link to="/customers">Customer List</Link> | 
                    <Link to="/campaigns">Campaign List</Link>
                </nav>
                <Routes>
                    <Route path="/add-customer" element={<CustomerForm />} />
                    <Route path="/create-campaign" element={<CampaignForm />} />
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/campaigns" element={<CampaignList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
