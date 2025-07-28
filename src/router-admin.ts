import express, { Request, Response } from "express";
import memberController from "./controllers/member.controller";
/**
 * HERE WE ONLY CREATE "ENDPOINTS" OF ADMIN ROUTE
 * */
const routerAdmin = express.Router();
/**
 * 1 Endpoint: To redirect Main(homepage)
 * */
routerAdmin.get("/", memberController.goHome);
/**
 * 2 Endpoint: Login
 * */
/**
 * 3 Endpoint: SignUp
 * */

export default routerAdmin;
