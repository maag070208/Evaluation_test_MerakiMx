"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = require("./../controllers/clienteController");
class ClienteRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clienteController_1.clienteController.list);
    }
}
const clienteRoute = new ClienteRoute();
exports.default = clienteRoute.router;
