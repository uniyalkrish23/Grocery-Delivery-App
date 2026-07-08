# Grocery Delivery Website using Mern Stack 
A complete full-stack Grocery Delivery Web Application built using the MERN stack (MongoDB, Express, React, Node.js) with integrated user and seller authentication, product management, cart functionality, order tracking, and Stripe online payments.

This platform supports both customers (users) and sellers/admins, offering a seamless shopping and selling experience.


## Features Overview
### User Features
 - Register/Login with secure JWT auth
 - Browse all products and filter by category
 - View product details
 - Add to Cart / Remove from Cart
 - Add and manage delivery addresses
 - Place orders using:
    - Cash on Delivery
    - Stripe Payments
 - View order history
 - Session persistence via HTTP-only cookies

### Seller/Admin Features
 - Secure seller login (env-based credentials)
 - Add new products with image upload (Cloudinary)
 - View and manage product list
 - View all customer orders
 - Toggle product stock availability
 -  View paid/COD orders

## Tech Stack
 ### Frontend
  - React.js with React Router
  - Tailwind CSS for modern UI
  - React Context API for global state
  - React Hot Toast for notifications

 ### Backend
  - Node.js + Express.js
  - MongoDB with Mongoose
  - JWT + Cookies for authentication
  - Stripe API for payment processing
  - Cloudinary for image uploads 

## API Endpoints
### User Routes
   - Register new user
     - Method: POST
     - Endpoint: /api/user/register
   - Login existing user
     - Method: POST
     - Endpoint: /api/user/login	
   - Logout user
     - Method: GET
     - Endpoint: /api/user/logout	
   - Get authenticated user
     - Method: GET	
     - EndPoint: /api/user/is-auth
	
### Cart & Address
   - Update cart items
     - Method: POST
     - EndPoint: /api/cart/update
   - Add address
     - Method: POST
     - EndPoint: /api/address/add
   - Get all user addresses
     - Method: GET
     - EndPoint: /api/address/get
	

### Orders
 - Place order via COD
   - Method: POST
   - Endpoint: /api/order/cod
 - Place order via Stripe
   - Method: POST
   - Endpoint: /api/order/stripe
 - Get user's orders
   - Method: GET	
   - Endpoint: /api/order/user
 - Get all orders (admin)
   - Method: GET	
   - Endpoint: /api/order/seller
 - Stripe webhook verification
   - Method: POST
   - Endpoint: /stripe

### Seller Routes
  - Seller login
    - Method: POST
    - EndPoint: /api/seller/login
  - Logout seller
    - Method: GET
    - EndPoint: /api/seller/logout
  - Seller auth verification
    - Method: GET
    - EndPoint: /api/seller/is-auth

### Products
  - Add a new product
    - Method: POST
    - Endpoint: /api/product/add
  - Get all products
    - Method: GET
    - Endpoint: /api/product/list
  - Get single product by ID
    - Method: POST
    - Endpoint: /api/product/id	
  - Toggle in-stock status
    - Method: POST
    - Endpoint: /api/product/stock	
			

## Authentication
  - Both users and sellers use JWT + HTTP-only cookies.
  - Users get token in token, sellers in sellerToken.
  - Cookies are secured with:
    - httpOnly: true
    - secure: true (in production)
    - sameSite: none/strict
  - Session lasts 7 days.

## Stripe Integration
  - Payments handled via Stripe Checkout Sessions.
  - Webhook used to:
    - Confirm payment success
    - Clear cart
    - Delete failed orders

## Author
### Krish Uniyal
Full Stack Developer