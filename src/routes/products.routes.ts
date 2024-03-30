import { Router } from "express";
import {
  findProducts,
  findSpecialPrice,
} from "../controllers/products.controller";

class ProductsRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/products", findProducts);
    this.router.get("/price/:userId/:productName", findSpecialPrice);
  }
}

export default new ProductsRoutes().router;
