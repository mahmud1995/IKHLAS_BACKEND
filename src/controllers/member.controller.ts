import { Request, Response } from "express";
interface T {
  [key: string]: any;
}
const memberController: T = {};
memberController.getMember = (req: Request, res: Response) => {
  console.log("memberController: Get Member");
  try {
    res.send(alert("you are entered to get member page"));
  } catch (error) {
    console.log(`Failed to fetch Member data`);
  }
};

export default memberController;
