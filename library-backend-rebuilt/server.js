const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
      family: 4,
      tlsInsecure: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
const booksRouter = require('./src/routes/books');
const membersRouter = require('./src/routes/members');
const issuesRouter = require('./src/routes/issues');

app.use('/api/books', booksRouter);
app.use('/api/members', membersRouter);
app.use('/api/issues', issuesRouter);

// Health Check
app.get('/api', (req, res) => res.json({ ok: true, msg: 'Library API running' }));

// ✅ Serve Angular Frontend (after build)
// Serve Angular Frontend (after build)
// Serve Angular Frontend (after build)
// Serve Angular Frontend (after build)
const frontendPath = path.join(__dirname, '..', 'library-frontend-ready', 'dist', 'library-frontend', 'browser');

app.use(express.static(frontendPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start Server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});
