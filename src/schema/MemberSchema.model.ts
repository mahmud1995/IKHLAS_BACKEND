import mongoose, { Schema, Types } from "mongoose";
import {
  AuthProvider,
  MemberStatus,
  MemberType,
} from "../libs/enums/member.enum";

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },
    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    memberEmail: {
      type: String,
      index: { unique: true, sparse: true }, // unique bulsin, boshqa ishlata olmasin
      required: true,
    },
    memberNickName: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: function (this: any) {
        return this.authProvider === AuthProvider.LOCAL;
      },
    },
    memberPassword: {
      type: String,
      select: false,
      required: function (this: any) {
        return this.authProvider === AuthProvider.LOCAL;
      },
    },
    memberAddress: {
      type: String,
    },
    memberDescription: {
      type: String,
    },
    memberImage: {
      type: String,
    },
    memberPoints: {
      type: Number,
      default: 0,
    },

    // Google OAuth fields
    googleId: {
      type: String,
      sparse: true,
      index: { unique: true, sparse: true },
    },
    authProvider: {
      type: String,
      enum: AuthProvider,
      default: AuthProvider.GOOGLE,
      required: true,
    },
  },
  { timestamps: true } // auto insert updateAt and createdAt to schema
);

// Compound index for OAuth users
memberSchema.index({ authProvider: 1, googleId: 1 }, { sparse: true });
// Export Schema model
export default mongoose.model("Member", memberSchema);
