# Xeno CRM & Campaign Management App

Xeno CRM is a simplified Customer Relationship Management (CRM) and Campaign Management app designed to help businesses organize their customer data, create audience segments, and send personalized campaign messages. This project implements key functionalities that allow users to interact with their customer base using real-time data.

---

## Features

1. **Customer and Order Data Management**:
   - API to manage customer data (name, email, total spending, visit frequency).
   - API to manage customer orders and associate them with customers.

2. **Audience Segmentation**:
   - Create dynamic audience segments based on conditions such as spending, visit frequency, inactivity, etc.
   - Use AND/OR conditions to build flexible audience segments.
   - Display the size of the audience segment before saving.

3. **Campaign Management**:
   - Create and track campaigns.
   - Send personalized messages to customer segments (e.g., discounts, special offers).
   - Track delivery status (SENT or FAILED) for each campaign message.

4. **Google Authentication**:
   - Google OAuth 2.0 authentication for secure access to the app.

5. **Backend**:
   - APIs built using Node.js and Express.js.
   - Use of a message queue (e.g., Pub-Sub) for handling delivery receipt and status updates in a scalable way.

6. **Frontend**:
   - React.js-based user interface for managing audience segments and campaigns.

7. **Database**:
   - MySQL or MongoDB used to store customer data, order information, campaign details, and communication logs.

---

## Tech Stack

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL or MongoDB
- **Authentication**: Google OAuth 2.0
- **Pub/Sub**: (Optional) Message Queue (e.g., Redis, Kafka)
  
---

## Prerequisites

- Node.js >= v14.x
- npm or yarn
- MySQL or MongoDB
- A Google Developer account for OAuth credentials

---

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VatsalS31/xeno-crm.git
   cd xeno-crm
Install dependencies:

bash
Copy code
npm install
Set up the environment:

Create a .env file in the root of the backend directory and add your Google OAuth credentials, database connection strings, and other environment variables.
Example .env:

makefile
Copy code
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=xenocrm
Run the server:

bash
Copy code
npm start
The backend API will be accessible at http://localhost:5000 (or your configured port).

Frontend Setup
Clone the repository (if not already cloned):

bash
Copy code
git clone https://github.com/VatsalS31/xeno-crm.git
cd xeno-crm-frontend
Install dependencies:

bash
Copy code
npm install
Run the frontend:

bash
Copy code
npm start
The frontend will be available at http://localhost:3000.

Usage
Google Authentication:

Users can log in using their Google account, which will provide authentication and secure access to the app.
Audience Management:

Define audience segments based on customer data.
Apply conditions such as total spending > INR 10,000 or visits <= 3.
Campaign Management:

Create and track campaigns.
Send personalized messages like Hi [Name], here's 10% off on your next order!.
Message Status:

Track the delivery status of each message (e.g., SENT or FAILED).
APIs
1. Customer API
POST /api/customers: Add a new customer.
GET /api/customers: Get all customers.
GET /api/customers/:id: Get a specific customer.
2. Order API
POST /api/orders: Add a new order for a customer.
GET /api/orders: Get all orders.
3. Campaign API
POST /api/campaigns: Create a new campaign.
GET /api/campaigns: Get all campaigns.
4. Communication Log API
POST /api/communications: Log communication for a campaign.
GET /api/communications: Get communication logs.
Deployment
You can deploy the app using services like Heroku, Vercel, AWS, or any cloud platform of your choice.
Backend Deployment
Ensure your database (MySQL/MongoDB) is deployed or accessible from your server.
Push your backend code to the cloud platform and ensure environment variables are correctly configured.
Frontend Deployment
Build the frontend with:
bash
Copy code
npm run build
Deploy the build folder to services like Vercel, Netlify, or AWS S3.
Future Enhancements
Implement additional audience segmentation features (e.g., by region, product category).
Improve message delivery tracking with more detailed stats.
Implement batch processing for campaigns to improve performance at scale.
Add more robust error handling and validation across the system.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Google OAuth 2.0 documentation
React.js
Node.js
Express.js
MySQL
