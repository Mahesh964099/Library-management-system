// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Replace with your actual username, password, cluster host and DB name ---
const mongoUser = 'fareed';
const mongoPass = 'Fareed123'; // keep this secret in production
const clusterHost = 'librarycluster.ndmqhw1.mongodb.net';
const dbName = 'librarydb';

// Build connection string with database name
const uri = `mongodb+srv://${encodeURIComponent(mongoUser)}:${encodeURIComponent(mongoPass)}@${clusterHost}/${dbName}?retryWrites=true&w=majority`;

// Connect with Mongoose
mongoose.connect(uri, {
  // options are optional with modern mongoose versions but safe to include
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Import routes (make sure these files exist)
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const borrowerRoutes = require('./routes/borrowerRoutes');

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/borrowers', borrowerRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.send('Library Management API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
