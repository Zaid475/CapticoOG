import { Router } from "express";
import { Create, Fetchcourses, Singlecourse } from "../controller/coursecontroller.js";


const routes = Router()

routes.post("/create", Create)
routes.post("/fetch",Fetchcourses)
routes.post("/singlecourse/:id",Singlecourse)
// routes.post("/getUserData",UserData)

export default routes