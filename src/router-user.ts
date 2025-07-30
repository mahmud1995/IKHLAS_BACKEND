import express, { Request, Response } from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

router.get("/", memberController.goUserHome);
router.post("/login", memberController.userLogin);
router.post("/signup", memberController.userSignup);
export default router;
