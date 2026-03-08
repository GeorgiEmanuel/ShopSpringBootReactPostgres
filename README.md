# Full-Stack E-Commerce Application – Spring Boot, React & PostgreSQL

A full-stack **E-Commerce web application** built using **Spring Boot**, **React**, and **PostgreSQL**.
The application allows users to browse products, manage a shopping cart, and interact with administrators through a **real-time live chat system**.

The project demonstrates a **modern cloud-based architecture** with services deployed across multiple platforms including **Netlify**, **Render**, **Neon**, **Upstash**, and **Firebase**.

---

# Table of Contents

* [Project Overview](#project-overview)
* [System Architecture](#system-architecture)
* [Key Features](#key-features)
* [Technical Architecture & Methodologies](#technical-architecture--methodologies)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Setup and Installation](#setup-and-installation)
* [Database Configuration](#database-configuration)
* [Running the Application](#running-the-application)
* [Deployment](#deployment)
* [Testing](#testing)
* [Learning Goals](#learning-goals)

---

# Project Overview

This project demonstrates the development of a **full-stack E-commerce web application** using modern technologies and cloud services.

The backend exposes **RESTful APIs** implemented with Spring Boot, while the React frontend communicates with these APIs to display and manipulate shop data.

Users can:

* Browse products
* Add products to a shopping cart
* View stock information
* Communicate through a real-time live chat

Administrators can manage products through an integrated dashboard.

All application data is stored in a **PostgreSQL relational database** and accessed using **Spring Data JPA / Hibernate**.

---

# System Architecture

The system is composed of several cloud-based components.

### Frontend (React)

Responsible for:

* Rendering the user interface
* Displaying product catalog
* Managing shopping cart functionality
* Integrating the live chat interface
* Communicating with backend REST APIs

### Backend (Spring Boot)

Responsible for:

* Providing REST API endpoints
* Managing product operations
* Handling business logic
* Communicating with the database

### Database (PostgreSQL)

Responsible for:

* Persisting application data
* Managing relational data structures

### Caching Layer

Used to improve performance by caching frequently requested data.

### Real-Time Messaging

Implemented using **Firebase** to support live chat between users and administrators.

---

# Key Features
* **User Authentication**
  * Secure login system
  * User session management
  * Role-based interface (admin / user functionality)
  <img width="1117" height="785" alt="image" src="https://github.com/user-attachments/assets/5b5810fa-6117-40e3-9b43-3373cda5451c" />
  <img width="1682" height="951" alt="image" src="https://github.com/user-attachments/assets/fc2b0535-2354-42aa-8a7f-0878afc2504c" />



* **Product Catalog**

  * View available products
  * Display product price and stock availability
    
  <img width="1858" height="1036" alt="image" src="https://github.com/user-attachments/assets/ace836ca-4013-4677-9e85-8b0c44a316c9" />


* **Shopping Cart**

  * Add products to cart
  * Manage cart items
  <img width="1552" height="987" alt="image" src="https://github.com/user-attachments/assets/9503cd85-6f8c-45f8-8562-bff3cf0fd396" />


* **Product Management**

  * Create new products
  * Edit existing products
  * Delete products
  <img width="1604" height="1029" alt="image" src="https://github.com/user-attachments/assets/f1ff33c1-aba0-4b01-8a71-85b8e6435c98" />
  <img width="1638" height="1026" alt="image" src="https://github.com/user-attachments/assets/f8bc7e78-4c86-4573-a22c-13435ac123ad" />

  


* **Live Chat System**

  * Real-time messaging between users and administrators
  * Implemented using Firebase
  <img width="1817" height="1025" alt="image" src="https://github.com/user-attachments/assets/1bee4ed3-86e0-4732-bfab-080c926ac04a" />
  <img width="1683" height="1029" alt="image" src="https://github.com/user-attachments/assets/b8313793-2e16-4c1b-9402-e8fa8f91186c" />


* **RESTful API**

  * Backend exposes endpoints for CRUD operations
  * Frontend communicates with backend via HTTP requests

* **Modular Monolith Backend Architecture**
  * The backend is implemented as a modular monolith
  * Application modules are separated by domain responsibilities
  * Maintains clear boundaries between features while running as a single deployable application

* **Cloud Deployment**

  * Frontend hosted on Netlify
  * Backend hosted on Render
  * PostgreSQL database hosted on Neon
  * Redis caching provided by Upstash

* **Performance Optimization**

  * Frequently accessed data cached using Redis

---

# Technical Architecture & Methodologies

## Backend Architecture

The backend follows a **modular monolith architecture**, where the application is structured into clearly separated modules while remaining a single deployable unit.

### Controller Layer

Handles HTTP requests and exposes REST API endpoints.

### Service Layer

Implements application business logic and coordinates operations between controllers and repositories.

### Repository Layer

Uses **Spring Data JPA** to interact with the PostgreSQL database.

---

## Frontend Architecture

The React frontend manages the presentation layer and communication with the backend.

Responsibilities include:

* Rendering UI components
* Managing application state
* Sending HTTP requests to the backend API
* Integrating Firebase for real-time chat
* Displaying API responses

---

# Tech Stack

| Component        | Technology                  |
| ---------------- | --------------------------- |
| Backend          | Spring Boot                 |
| Frontend         | React & Tailwind CSS        |
| Database         | PostgreSQL                  |
| ORM              | Spring Data JPA / Hibernate |
| Build Tool       | Gradle                      |
| API Style        | REST                        |
| Frontend Tooling | Node.js / npm               |
| Backend Hosting  | Render                      |
| Frontend Hosting | Netlify                     |
| Database Hosting | Neon                        |
| Caching          | Upstash (Redis)             |
| Real-Time Chat   | Firebase                    |

---

# Project Structure

Example simplified structure.

Backend:

```text
src/main/java/com/shop
│
├── admin
├── auth
├── catalog
├── infrastructure
└── order
```

Frontend:

```text
frontend/src/
├── api/            
├── components/    
├── contexts/       
├── hooks/          
├── pages/          
├── App.jsx         
├── firebase.js     
├── index.css       
└── main.jsx        
```

---

# Setup and Installation

## 1. Clone the repository

```bash
git clone https://github.com/GeorgiEmanuel/ShopSpringBootReactPostgres.git
cd ShopSpringBootReactPostgres
```

---

# Database Configuration

Configure your PostgreSQL connection in `application.properties`.

Example configuration:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

Ensure PostgreSQL is running locally and the database exists before starting the application.

---

# Running the Application

## Run the Backend

```bash
./gradlew bootRun
```

Backend will start at:

```
http://localhost:8080
```

---

## Run the Frontend

Navigate to the frontend directory.

```bash
npm install
npm start
```

The React application will run at:

```
http://localhost:3000
```

The frontend communicates with the backend REST API and Firebase services.

---

# Deployment

The application is **fully deployed using a distributed cloud architecture**.

### Frontend

Hosted on **Netlify**

* React application deployed as a static site
* Global CDN delivery

### Backend

Hosted on **Render**

* Runs the Spring Boot application
* Exposes REST API endpoints

### Database

Hosted on **Neon**

* Managed PostgreSQL database

### Caching

Implemented using **Upstash Redis**

* Improves performance
* Reduces database load

### Real-Time Messaging

Implemented using **Firebase**

* Enables live chat functionality
* Provides real-time communication between users and administrators

---

# Testing

The application can be tested by:

* Accessing the deployed frontend
* Browsing products
* Adding items to the cart
* Managing products from the admin interface
* Using the real-time live chat system
* Sending API requests via Postman

---

# Learning Goals

This project demonstrates:

* Building a **full-stack E-commerce application**
* Creating **REST APIs with Spring Boot**
* Integrating **React with a Java backend**
* Using **PostgreSQL with Spring Data JPA**
* Implementing **shopping cart functionality**
* Implementing **real-time chat with Firebase**
* Using **Redis caching** for performance optimization
* Deploying applications using **modern cloud infrastructure**
* Designing **scalable multi-service architectures**

---
