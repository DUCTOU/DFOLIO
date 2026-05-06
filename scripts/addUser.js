require('dotenv').config({ path: '.env.local' });

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define MONGODB_URI in .env.local");
  process.exit(1);
}

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function addUser() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("Usage: node scripts/addUser.js <username> <password>");
    process.exit(1);
  }

  const [username, password] = args;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log(`User "${username}" already exists. Updating password...`);
      const passwordHash = await bcrypt.hash(password, 10);
      await User.updateOne({ username }, { passwordHash });
      console.log("Password updated successfully!");
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      await User.create({ username, passwordHash });
      console.log(`User "${username}" created successfully!`);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

addUser();
