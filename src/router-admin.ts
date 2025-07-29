import express from "express";
import restaurantController from "./controllers/restaurant.controller";
/**
 * HERE WE ONLY CREATE "ENDPOINTS" OF ADMIN ROUTE
 * */
const routerAdmin = express.Router();
/**
 * 1 Endpoint: To redirect Main(homepage)
 * */
routerAdmin.get("/", restaurantController.getAdminPage);
/**
 * 2 Endpoint: Login
 * */
routerAdmin.get("/login", restaurantController.getAdminLogin);
/**
 * 3 Endpoint: SignUp
 * */
routerAdmin.get("/signup", restaurantController.getAdminSignup);

export default routerAdmin;
