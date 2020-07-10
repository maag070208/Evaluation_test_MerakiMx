import { Router } from 'express';
import { pedidoController } from './../controllers/pedidoController';

class PedidoRoute{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/',pedidoController.list);
    }
}

const pedidoRoute = new PedidoRoute;
export default pedidoRoute.router;