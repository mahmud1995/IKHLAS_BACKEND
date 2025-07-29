import express, { Request, Response } from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

router.get("/", memberController.goUserHome);
router.get("/login", memberController.userLogin);
router.get("/signup", memberController.userSignup);
export default router;
