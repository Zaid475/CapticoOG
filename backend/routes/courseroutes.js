import { Router } from "express";
import { Create, Delete, Fetchcourses, Singlecourse } from "../controller/coursecontroller.js";


const routes = Router()

routes.post("/create", Create)
routes.post("/fetch",Fetchcourses)
routes.post("/singlecourse/:id",Singlecourse)
routes.delete("/delete",Delete)


export default routes