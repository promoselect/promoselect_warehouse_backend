import express from "express";
import { Controller } from "@/interfaces/controller";

export abstract class Route<T extends Controller = Controller> {

    public readonly router: express.Router;
    protected controller!: T;
    protected readonly path: string;
    

    constructor(path: string) {
        this.path = path;
        this.router = express.Router();
        this.configRoutes();
    }

    protected abstract configRoutes(): void;
}
