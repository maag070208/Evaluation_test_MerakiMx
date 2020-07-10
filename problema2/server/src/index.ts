import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoute';
import  productosRoute  from './routes/productoRoute';
import clienteRoute from './routes/clienteRoute';
//creamos una clase llama Server

class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    //Configuraciones del servidor
    config():void{
        this.app.set('port', process.env.PORT || 3200);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    
    }
    //aqui insertamos la rutas 
    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/productos',productosRoute);
        this.app.use('/clientes',clienteRoute);
    }

    //aqui iniciamos el servidor 
    start():void{
		this.app.listen(this.app.get('port'), () => {
			console.log('Server on port', this.app.get('port'));
		});
    }
}
const server = new Server();
server.start();