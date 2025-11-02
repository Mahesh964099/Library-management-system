# Library Management Backend

This is a rebuilt backend for the Library Management System (Node.js + Express + MongoDB).

## Quick start
1. Copy `.env.example` to `.env` and provide `MONGO_URI`.
2. `npm install`
3. `npm run dev` to start with nodemon or `npm start`
4. Server will run on `http://localhost:4000` by default.

API endpoints (JSON):
- GET `/api/books` - list books
- POST `/api/books` - create book
- GET `/api/books/:id` - get book
- PUT `/api/books/:id` - update book
- DELETE `/api/books/:id` - delete book

- GET `/api/members`
- POST `/api/members`
- etc.

- POST `/api/issues/issue` - issue a book to a member
- POST `/api/issues/return` - return a book
