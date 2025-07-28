import express, { Request, Response } from "express";

interface T {
  [key: string]: any;
}

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("");
  } catch (error) {
    console.log("Failed to fetch goHome page", error);
  }
};

export default memberController;
