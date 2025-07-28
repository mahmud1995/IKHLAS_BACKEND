import express from "express";
import dotenv from "dotenv";
import routerAdmin from "./router-admin";
import router from "./router";

import http from "http";

const app = express();
dotenv.config();

app.use("/admin", routerAdmin);
app.use("/", router);

const server = http.createServer(app);

export default server;
