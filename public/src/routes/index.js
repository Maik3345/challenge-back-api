"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_routes_1 = __importDefault(require("./products.routes"));
class Routes {
    constructor(app) {
        app.use("/api", products_routes_1.default);
    }
}
exports.default = Routes;
