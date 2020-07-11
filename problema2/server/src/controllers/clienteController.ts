import { Request, response, Response } from "express";
import pool from "../database";

class ClienteController {
  public async list(req: Request, res: Response): Promise<void> {
    const clientes = await pool.query("SELECT * FROM Clientes");
    res.json(clientes);
  }

  public async insert(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO Clientes SET ?", [req.body]);
    res.json({ message: "Cliente Guardado" });
  }

}

export const clienteController = new ClienteController();
