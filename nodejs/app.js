const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/api');

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
