"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSpecialPrice = exports.findProducts = void 0;
const products_model_1 = __importDefault(require("../models/products.model"));
const special_price_model_1 = __importDefault(require("../models/special-price.model"));
const findProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield products_model_1.default.find();
        console.log(data.length);
        return res.json(data);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Error al realizar la búsqueda",
        });
    }
});
exports.findProducts = findProducts;
const findSpecialPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const productName = req.params.productName;
        console.log(userId, productName);
        const product = yield products_model_1.default.find({
            name: productName,
        });
        if (!product.length) {
            return res.status(404).send({ message: "Producto no encontrado" });
        }
        const specialPrice = yield special_price_model_1.default.find({
            user_id: userId,
            brand: product[0].brand,
        });
        const specialPriceValue = specialPrice.length
            ? specialPrice[0].special_price
            : product[0].price;
        console.log(specialPriceValue);
        const { name, description, stock, brand } = product[0];
        const newProduct = {
            name,
            description,
            stock,
            brand,
            price: specialPriceValue,
        };
        return res.json(newProduct);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Error al realizar la búsqueda",
        });
    }
});
exports.findSpecialPrice = findSpecialPrice;
