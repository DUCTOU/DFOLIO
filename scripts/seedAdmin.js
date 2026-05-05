const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB.");

  const username = "admin";
  const password = "password123";

  const existingAdmin = await User.findOne({ username });
  if (existingAdmin) {
    console.log("Admin user already exists.");
    process.exit(0);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({ username, passwordHash });

  console.log(`Admin created successfully!`);
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);
  process.exit(0);
}

seed().catch(console.error);
