import express, { Request, Response } from "express";
import { T } from "../libs/types/common";

const memberController: T = {};

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
memberController.userSignup = (req: Request, res: Response) => {
  try {
    console.log("User userSignup");
    res.send("User Signup Page");
  } catch (err) {
    console.log("Error: signup page", err);
  }
};

export default memberController;
