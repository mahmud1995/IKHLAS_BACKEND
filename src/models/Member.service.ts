import { MemberStatus } from "../libs/enums/member.enum";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/MemberSchema.model";
class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      console.log("memberService Signup");
      const signedUser = await this.memberModel.create(input);
      console.log("createdNewUser:", signedUser.toObject());
      return signedUser.toJSON() as Member;
    } catch (error) {
      console.log("Error on Signup member", error);
      throw error;
    }
  }

  //   public async login(input: LoginInput): Promise<Member> {
  //     const loggedUser = await this.memberModel
  //       .findOne(
  //         {
  //           memberEmail: input.memberEmail,
  //           memberStatus: { $ne: MemberStatus.DELETE },
  //         },
  //         { memberEmail: 1, memberPassword: 1, memberStatus: 1 }
  //       )
  //       .exec();
  //   }
  //   public async login(input: LoginInput): Promise<Member> {

  //     if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
  //     else if (member.memberStatus === MemberStatus.BLOCK) {
  //       throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER);
  //     }

  //     const isMatch = await bcrypt.compare(
  //       input.memberPassword,
  //       member.memberPassword
  //     );
  //     // const isMatch = input.memberPassword === member.memberPassword;

  //     if (!isMatch) {
  //       throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
  //     }
  //     return (await this.memberModel
  //       .findById(member._id)
  //       .lean()
  //       .exec()) as unknown as Member;
  //     // .lean() orqali db dan olgan datani O'ZGARTIRISH imkoniyatini olamiz
  //   }
}

export default MemberService;
