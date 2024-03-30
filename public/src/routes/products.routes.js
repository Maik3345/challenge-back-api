"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
class ProductsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/products", products_controller_1.findProducts);
        this.router.get("/price/:userId/:productName", products_controller_1.findSpecialPrice);
    }
}
exports.default = new ProductsRoutes().router;
