import { Request, response, Response } from 'express';
import pool from '../database';

class ClienteController{
    public async list(req:Request, res: Response):Promise<void>{
        const clientes = await pool.query('SELECT * FROM Clientes');
        res.json(clientes);
    }
}

export const clienteController = new ClienteController;