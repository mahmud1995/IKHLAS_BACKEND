import { Types } from "mongoose";
import { MemberType, MemberStatus, AuthProvider } from "../enums/member.enum";

export interface Member {
  _id: Types.ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberEmail: string;
  memberNickName: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDescription?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;

  // Google OAuth fields
  googleId?: string;
  authProvider: AuthProvider;
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberEmail: string; // must have
  memberNickName: string; // Made required since schema requires it
  memberPhone: string; // Made required since schema requires it
  memberPassword?: string; // optional for OAuth
  memberAddress?: string;
  memberDescription?: string;
  memberImage?: string;
  memberPoints?: number;
}
export interface LoginInput {
  memberEmail: string; // must have
  memberPassword: string; // must have
}

// New interface for Google OAuth user creaction
export interface GoogleOAuthInput {
  googleId: string;
  memberEmail: string;
  memberNickName: string;
  memberImage?: string;
  authProvider: AuthProvider.GOOGLE;
}
