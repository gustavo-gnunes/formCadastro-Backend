import { Router } from 'express';
import carrosRouter from './carrosRoutes';


const routes = Router();

routes.use('/carros', carrosRouter);


export default routes;