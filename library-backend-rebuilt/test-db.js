const mongoose = require("mongoose");
require("dotenv").config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { ssl: true });
    console.log("✅ MongoDB Atlas connected successfully!");
    await mongoose.connection.close();
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
})();

