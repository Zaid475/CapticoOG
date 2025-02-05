import { Router } from "express";
import authRoutes from './authroute.js'
import courseRoutes from"../routes/courseroutes.js"


const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/course', courseRoutes  );

export default routes;