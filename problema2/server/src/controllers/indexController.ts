import {Request, Response} from 'express';
import pool from '../database';

class IndexController  {
 	
 public	index (req: Request, res: Response) {
 		res.json({"text": "Esto funciona"});
 	}
 } 


 export const indexController = new IndexController();