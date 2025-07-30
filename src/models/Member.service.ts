import { MemberStatus } from "../libs/enums/member.enum";

import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/MemberSchema.model";
import Errors, { HttpCode, Message } from "../libs/Error";
import * as bcrypt from "bcryptjs";
class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    try {
      console.log("memberService Signup");
      const signedUser = await this.memberModel.create(input);
      signedUser.memberPassword = "";
      return signedUser.toJSON() as Member;
    } catch (error) {
      console.log("Error on Signup member", error);
      throw error;
    }
  }

  // public async login(input: LoginInput): Promise<Member> {
  //   const loggedUser = await this.memberModel
  //     .findOne(
  //       {
  //         memberEmail: input.memberEmail,
  //         memberStatus: { $ne: MemberStatus.DELETE },
  //       },
  //       { memberEmail: 1, memberPassword: 1, memberStatus: 1 }
  //     )
  //     .exec();
  //   if (!loggedUser)
  //     throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_EMAIL);
  //   else if (loggedUser.memberStatus === MemberStatus.BLOCK) {
  //     throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER);
  //   }
  //   const result = await this.memberModel
  //     .findById(loggedUser._id)
  //     .lean()
  //     .exec();
  //   if (!result) {
  //     throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_EMAIL);
  //   }
  //   return result;
  // }
}

export default MemberService;
