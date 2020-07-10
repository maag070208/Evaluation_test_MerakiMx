import { Request, Response } from 'express';
import pool from '../database';


class ProductoController {

    public async list(req: Request, res: Response): Promise<void> {    
    
        const productos = await  pool.query('SELECT * FROM Productos');
        res.json(productos);
      }

}

export const productosController = new ProductoController;