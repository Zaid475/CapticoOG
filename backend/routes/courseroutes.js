import { Router } from "express";
import { Create, Fetchcourses } from "../controller/coursecontroller.js";


const routes = Router()

routes.post("/create", Create)
routes.post("/fetch",Fetchcourses)
// routes.post("/getUserData",UserData)

export default routes