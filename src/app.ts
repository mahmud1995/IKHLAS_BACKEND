import express from "express";
import routerAdmin from "./router-admin";
import router from "./router-user";
import path from "path";
import http from "http";
import morgan from "morgan";
import { createClient } from "redis";
import { error } from "console";

const app = express();
const redisClient = createClient({
  url: process.env.REDIS_URL,
});

// connect with Redis
redisClient.connect().catch(console.error);
app.locals.redis = redisClient;

/** 1 - ENTRANCE
 * ------ MIDDLEWARE PARSES ------
 * express.static: Express to serve static files (like images, CSS, JavaScript) from the public folder.
 * - like public/logo.png, it will be accessible at: http://localhost:PORT/logo.png
 * express.static(): public ==> static folderga aylantiramiz
 * express.urlencoded(): helps Express read and convert form data into a JavaScript object
 */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(`:method :url - :response-time ms [:status]`));

/** 2 - SESSIONS
 *
 */

/** 3 - VIEWS
 * path.join(__dirname, "views") creates the full path to your views directory.
 * - This tells Express where to find your view templates (HTML-like files used for rendering pages).
 * EJS lets you embed JavaScript logic (like loops, conditions) inside HTML.
 * - This tells Express to use EJS (Embedded JavaScript Templates) as the templating engine.
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 4 - ROUTE
 */
// Middleware Design Pattern
app.use("/", router);
app.use("/admin", routerAdmin);

const server = http.createServer(app);

export default server;
