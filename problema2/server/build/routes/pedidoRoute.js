"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoController_1 = require("./../controllers/pedidoController");
class PedidoRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pedidoController_1.pedidoController.list);
    }
}
const pedidoRoute = new PedidoRoute;
exports.default = pedidoRoute.router;
