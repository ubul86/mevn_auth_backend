# MEVN Backend Authentication

## Overview

This project is a MEVN (MongoDB, Express, Vue.js, Node.js) backend authentication system. It provides a backend built with Node.js and Express.js, using MongoDB as the database. This setup allows for easy user authentication and management.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A web application framework for Node.js, designed for building web applications and APIs.
- **MongoDB**: A NoSQL database that uses a document-oriented data model.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Docker Containers

This project includes the following Docker containers:

- **Node**: Runs the Node.js application.
- **MongoDB**: The NoSQL database for storing user data.
- **Mailhog**: An email testing tool for capturing and displaying outgoing emails.
- **Mongo Express**: A web-based MongoDB administration interface for managing the database.

## Setting Up with Docker

To set up the project using Docker, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```
   
2. **cp .env_sample .env**
3. **Fill in the Environment Variables**:
   Edit the .env file and fill in the necessary values for MongoDB connection, ports, and any other required settings.
4. **Build and Run the Containers:** Execute the following command to build and start the containers:
    ```bash
   docker-compose up -d --build
   ```
   
5. **Install Dependencies and Start the Node Server:** After the containers are running, execute the following command to install npm packages inside the Node container and start the server:
   ```bash
   docker exec -it mevn_auth_node npm install
   docker exec -it mevn_auth_node node server.js
   ```
6. **Access the Application:**
    - Node.js API: http://localhost:8085
    - Mongo Express: http://localhost:8081
    - Mailhog: http://localhost:8025

## Setting Up without Docker

To set up the project without using Docker, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **cp .env_sample .env**
3. **Fill in the Environment Variables**:
   Edit the .env file and fill in the necessary values for MongoDB connection, ports, and any other required settings.
4. **Install Dependencies:** Ensure you have Node.js and MongoDB installed. Run the following command to install the necessary packages:
   ```bash
   npm install
   ```
5. **Run MongoDB:** Start the MongoDB service. Ensure it's running and accessible.
6. **Start the Node.js Application:** Run the following command to start the server:
   ```bash
   node server.js
   ```
7. **Access the Application:**
    - Node.js API: http://localhost:5000