// This file is the entry point of the application. It initializes the application logic and may include configurations, middleware, and route handling.

import express from 'express';
import { MyType } from './types';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});