import mongoose, { Schema, Types } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

// Add OAuth fields to your existing MemberType interface
export interface MemberTypes {
  _id: Types.ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberEmail: string;
  memberNickName?: string;
  memberPhone?: string;
  memberPassword?: string; // Make optional for OAuth users
  memberAddress?: string;
  memberDescription?: string;
  memberImagePath?: string;
  memberPoints?: number;
  createdAt: Date;
  updatedAt: Date;

  // OAuth fields
  googleId?: string;
  githubId?: string;
  provider?: "local" | "google" | "github";
  providerId?: string;
}

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
      required: true,
    },
    memberPassword: {
      type: String,
      select: false,
      required: function (this: MemberType) {
        return this.provider;
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
  },
  { timestamps: true } // auto insert updateAt and createdAt to schema
);

// schema
export default mongoose.model("Member", memberSchema);
