import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/mongodb";
import { User } from "@/lib/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase();
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await User.findOne({ username: credentials.username });
        if (!user) {
          return null;
        }

        const isPasswordMatch = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!isPasswordMatch) {
          return null;
        }

        return { id: user._id.toString(), name: user.username };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_development",
});

export { handler as GET, handler as POST };
