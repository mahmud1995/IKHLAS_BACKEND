import { Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/MemberSchema.model";
class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      console.log("input:", input);
      const createdNewUser = await this.memberModel.create(input);
      console.log("createdNewUser:", createdNewUser.toJSON());
      return createdNewUser.toObject();
    } catch (error) {
      console.log("Error on Signup member", error);
      throw error;
    }
  }
}

export default MemberService;
