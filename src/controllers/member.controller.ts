import express, { Request, Response } from "express";
import { T } from "../libs/types/common";

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("User Home Page");
  } catch (err) {
    console.log("Error: goHome page", err);
  }
};
memberController.login = (req: Request, res: Response) => {
  try {
    console.log("User login page");
    res.send("User Login Page");
  } catch (err) {
    console.log("Error: login page", err);
  }
};
memberController.signup = (req: Request, res: Response) => {
  try {
    console.log("User signup page");
    res.send("User Signup Page");
  } catch (err) {
    console.log("Error: signup page", err);
  }
};

export default memberController;
