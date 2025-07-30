import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Error";

const memberController: T = {};
const memberService = new MemberService();

memberController.goUserHome = (req: Request, res: Response) => {
  try {
    console.log("User goUserHome");
    res.send("User Home Page");
  } catch (err) {
    console.log("Error: goHome page", err);
  }
};
memberController.userLogin = (req: Request, res: Response) => {
  try {
    console.log("User userLogin");
    res.send("User Login Page");
  } catch (err) {
    console.log("Error: login page", err);
  }
};
memberController.userSignup = async (req: Request, res: Response) => {
  try {
    console.log("User userSignup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    await res.status(HttpCode.CREATED).json({ member: result });
  } catch (err) {
    console.log("Error: signup page", err);
    res.status(Errors.standard.code).json(Errors.standard);
  }
};
/**
 * memberController.signup = async (req: Request, res:Response) => {
    try {
        console.log("signup");        
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
        const token = await authService.createToken(result);
            
        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000, 
            httpOnly: false,
        })


        res.status(HttpCode.CREATED).json({member: result, accessToken: token });
    } catch (err) {
        console.log("Error, signup:", err);
        res.status(Errors.standard.code).json(Errors.standard);
    }
};
 * 
 * */
export default memberController;
