import { Router } from 'express';
import { productosController } from './../controllers/productoController';

class ProductosRoute{



    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', productosController.list);
    }

}
 const productosRoute = new ProductosRoute();
 export default productosRoute.router;