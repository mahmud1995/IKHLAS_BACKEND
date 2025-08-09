import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import * as bcrypt from "bcryptjs";
import MemberSchemaModel from "../../schema/MemberSchema.model";
import { MemberStatus, MemberType, AuthProvider } from "../enums/member.enum";

// Serilize user for session
passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await MemberSchemaModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Local Strategy (your existing login)
passport.use(
  new LocalStrategy(
    { usernameField: "memberEmail" },
    async (email: string, password: string, done) => {
      try {
        const user = await MemberSchemaModel.findOne({
          memberEmail: email,
          authProvider: AuthProvider.LOCAL,
        }).select("+memberPassword");

        if (!user || !user.memberPassword) {
          return done(null, false, { message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.memberPassword);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid credentials" });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("Google Profile:", profile);

        // Check if user already exists with Google ID
        let user = await MemberSchemaModel.findOne({
          googleId: profile.id,
          authProvider: AuthProvider.GOOGLE,
        });

        if (user) {
          console.log("Existing Google user found");
          return done(null, user);
        }

        // Check if user exists with same email but different provider
        const existingEmailUser = await MemberSchemaModel.findOne({
          memberEmail: profile.emails?.[0]?.value,
        });

        if (existingEmailUser) {
          console.log("User with same email exists with different provider");
          // You can either link accounts or return error
          // For now, we'll return an error to avoid conflicts
          return done(
            new Error("Email already exists with different login method")
          );
        }

        // Create new user
        const newUser = new MemberSchemaModel({
          googleId: profile.id,
          authProvider: AuthProvider.GOOGLE,
          memberEmail: profile.emails?.[0]?.value,
          memberNickName: profile.displayName || `user_${Date.now()}`,
          memberImage: profile.photos?.[0]?.value,
          memberStatus: MemberStatus.ACTIVE,
          memberType: MemberType.USER,
          memberPoints: 0,
          // For OAuth users, we'll use a placeholder phone or make it optional
          memberPhone: `google_${profile.id}`, // Placeholder, you might want to collect this later
        });

        await newUser.save();
        console.log("New Google user created");
        return done(null, newUser);
      } catch (error) {
        console.error("Google OAuth Error:", error);
        return done(error);
      }
    }
  )
);

export default passport;
