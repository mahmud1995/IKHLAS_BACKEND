import { Request, Response } from "express";
interface T {
  [key: string]: any;
}
const memberController: T = {};
memberController.getMember = (req: Request, res: Response) => {
  try {
    console.log("memberController: Get Member");
    res.send("you are entered to get member page");
  } catch (error) {
    console.log(`Failed to fetch Member data`);
  }
};

export default memberController;
