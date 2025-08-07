import { Types } from "mongoose";
import { MemberType, MemberStatus } from "../enums/member.enum";
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
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberEmail: string; // must have
  memberNickName: string; // Made required since schema requires it
  memberPhone: string; // Made required since schema requires it
  memberPassword: string; // must have
  memberAddress?: string;
  memberDescription?: string;
  memberImage?: string;
  memberPoints?: number;
}
export interface LoginInput {
  memberEmail: string; // must have
  memberPassword: string; // must have
}
