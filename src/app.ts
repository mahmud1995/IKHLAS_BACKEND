import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import routerAdmin from "./router-admin";
import router from "./router";

import http from "http";

const app = express();
dotenv.config();

app.get("/admin", routerAdmin);
app.get("/", router);

const server = http.createServer(app);

export default server;
