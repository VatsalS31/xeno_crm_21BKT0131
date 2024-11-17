const express = require('express');
const router = express.Router();
const {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} = require('../controllers/customerController');

// Route for creating a new customer
router.post('/', createCustomer);

// Route for getting all customers
router.get('/', getCustomers);

// Route for getting a single customer by ID
router.get('/:id', getCustomerById);

// Route for updating a customer by ID
router.put('/:id', updateCustomer);

// Route for deleting a customer by ID
router.delete('/:id', deleteCustomer);

module.exports = router;
