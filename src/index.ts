import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import mongoose from "mongoose";
import { config } from "./shared/config";

export default class Server {
  constructor(app: Application) {
    this.database();
    this.config(app);
    new Routes(app);
  }

  private async database() {
    await mongoose.connect(config.uri);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:8081",
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
