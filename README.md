https://job-portal-uub7.onrender.com/api-doc/

# Job Portal API

This is a job portal API built with Node.js, Express and MongoDB. Users can register, log in, and perform CRUD operations on job listings using JWT authentication.




## Features

-   User registration and login with JWT authentication
-   CRUD operations for job listings
-   Integrated Swagger documentation for API endpoints

## Technologies Used
-   **Node.js**: A JavaScript runtime environment for server-side development.
-   **Express**: A web application framework for Node.js, used for building the API.
-   **MongoDB**: A NoSQL database for storing user and job listing data.
-   **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, used for interacting with the database.
-   **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
-   **Swagger**: An open-source framework for creating, documenting, and visualizing RESTful web services.

## Installation

1.  Clone the repository:
```bash
git clone https://github.com/your-username/job-portal.git
```
2.  Install the dependencies:
```bash
cd job-portal
npm install
```
3.  Set up the environment variables:
            Create a `.env` file in the root directory and add the following variables:
  ```bash
PORT=3000
MONGO_LOCAL_URL=mongodb://localhost:27017/jobportal 
JWT_SECRET=your-secret-key
```
4.  Start the server:
```bash
npm run server
```

## API Endpoints

The project provides the following API endpoints:

-   `POST /api/v1/auth/register`: Register a new user
-   `POST /api/v1/auth/login`: Log in a user
#### Job Listing Endpoints
-   `GET /api/v1/job/get-job`: Get all job listings
-   `POST /api/v1/job/create-job`: Create a new job listing
-   `GET /api/v1/job/job-stats/:id`: Stats of jobs
-   `PUT /api/v1/job/update-job/:id`: Update a job listing
-   `DELETE /api/v1/job/delete-job/:id`: Delete a job listing


## API Documentation

The API documentation is generated using Swagger and can be accessed at `http://localhost:3000/api-doc`.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
