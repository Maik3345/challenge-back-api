import { Application } from "express";
import productsRoutes from "./products.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", productsRoutes);
  }
}
