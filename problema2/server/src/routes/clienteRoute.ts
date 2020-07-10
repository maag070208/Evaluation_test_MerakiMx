import { Router } from 'express';
import { clienteController } from './../controllers/clienteController';

class ClienteRoute {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', clienteController.list)
    }
}

const clienteRoute = new ClienteRoute();
export default clienteRoute.router;