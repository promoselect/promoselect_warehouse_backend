import express, { NextFunction, Request, Response } from "express";
import { Controller, IController } from "@/interfaces/controller";

export abstract class Route {

    public readonly router: express.Router;
    protected controller!: Controller;
    protected readonly path: string;

    constructor(path: string) {
        this.path = path;
        this.router = express.Router();
        this.configRoutes();
    }

    protected abstract configRoutes(): void;

    protected bind(method: keyof IController) {
        return (req: Request, res: Response, next: NextFunction): void => {
            Promise.resolve(this.controller[method](req, res)).catch(next);
        };
    }
}
