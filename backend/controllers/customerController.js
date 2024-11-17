const Customer = require('../models/Customer');

// Function to create a new customer
exports.createCustomer = async (req, res) => {
    const { name, email, totalSpending, lastVisited, visitCount } = req.body;
    try {
        const newCustomer = new Customer({ name, email, totalSpending, lastVisited, visitCount });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Function to get all customers
exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Function to get a single customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Function to update a customer
exports.updateCustomer = async (req, res) => {
    const { name, email, totalSpending, lastVisited, visitCount } = req.body;
    try {
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            { name, email, totalSpending, lastVisited, visitCount },
            { new: true, runValidators: true } // Return the updated document
        );
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Function to delete a customer
exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(204).send(); // No content
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
