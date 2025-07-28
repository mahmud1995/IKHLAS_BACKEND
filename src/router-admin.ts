import express, { Request, Response } from "express";
import memberController from "./controllers/member.controller";
/**
 * HERE WE ONLY CREATE "ENDPOINTS" OF ADMIN ROUTE
 *
 * */
const routerAdmin = express.Router();
/**
 * First Endpoint: To redirect Main(homepage)
 * */
routerAdmin.get("/", memberController.goHome);

export default routerAdmin;
