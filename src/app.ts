import express from "express";
import routerAdmin from "./router-admin";
import router from "./router";

import http from "http";

const app = express();

app.use("/admin", routerAdmin);
app.use("/", router);

const server = http.createServer(app);

export default server;
