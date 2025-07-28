import express from "express";
import routerAdmin from "./router-admin";
import router from "./router";
import path from "path";
import http from "http";

const app = express();
/** 1 - ENTRANCE
 * ------ MIDDLEWARE PARSES ------
 * express.static: Express to serve static files (like images, CSS, JavaScript) from the public folder.
 * - like public/logo.png, it will be accessible at: http://localhost:PORT/logo.png
 * express.statis(): public ==> static folderga aylantiramiz
 * express.urlencoded(): helps Express read and convert form data into a JavaScript object
 */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** 2 - SESSIONS
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
app.use("/admin", routerAdmin);
app.use("/", router);

const server = http.createServer(app);

export default server;
