import { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};

restaurantController.getAdminPage = (req: Request, res: Response) => {
  try {
    console.log("Restaurant getAdminPage");
    res.send("Restaurant Home Page");
  } catch (error) {
    console.log("Error, Restaurant goHome", error);
  }
};
restaurantController.getAdminLogin = (req: Request, res: Response) => {
  try {
    console.log("Restaurant getAdminLogin");
    res.send("Restaurant Get Login Page");
  } catch (error) {
    console.log("Error, Restaurant Get Login", error);
  }
};
restaurantController.getAdminSignup = (req: Request, res: Response) => {
  try {
    console.log("Restaurant getAdminSignup");
    res.send("Restaurant Get Signup Page");
  } catch (error) {
    console.log("Error, Restaurant Get Signup", error);
  }
};
export default restaurantController;
