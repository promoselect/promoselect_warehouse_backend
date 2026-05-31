import express from "express";
import { Controller } from "@/interfaces/controller";

export abstract class Route<T extends Controller = Controller> {

    public readonly router: express.Router;
    protected controller: T;
    protected readonly path: string;
    

    constructor(path: string, controller: T) {
        this.path = path;
        this.router = express.Router();
        this.controller = controller;
        this.configRoutes();

    }

    protected configRoutes(): void  {
            this.registerGetRoutes();
            this.registerPostRoutes();
            this.registerPutRoutes();
            this.registerDeleteRoutes();
            this.registerPatchRoutes();
    };

    protected abstract registerGetRoutes(): void;

    protected abstract registerPostRoutes(): void;

    protected abstract registerPutRoutes(): void;

    protected abstract registerDeleteRoutes(): void;

    protected abstract registerPatchRoutes(): void;
}
    