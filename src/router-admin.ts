import express, { Request, Response } from "express";
import memberController from "./controllers/member.controller";

const routerAdmin = express.Router();
routerAdmin.get("/", memberController.getMember);

export default routerAdmin;
