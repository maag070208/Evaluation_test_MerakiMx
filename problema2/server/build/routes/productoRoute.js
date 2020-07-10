"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("./../controllers/productoController");
class ProductosRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productoController_1.productosController.list);
    }
}
const productosRoute = new ProductosRoute();
exports.default = productosRoute.router;
