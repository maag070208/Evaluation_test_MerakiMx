import { Request, Response } from 'express';
import pool from './../database';


class PedidoController {
    public async list(req: Request, res: Response):Promise<void>{
        const pedidos = await pool.query('SELECT * FROM Pedidos');
        res.json(pedidos);
    }
    public async hora(req: Request, res: Response):Promise<void>{
        const pedidos = await pool.query('SELECT id, from_unixtime(FechaPedido) from Pedidos');
        res.json(pedidos);
    }
}

export const pedidoController = new PedidoController;