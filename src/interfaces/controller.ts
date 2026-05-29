import { Request, Response } from "express";
import { Service } from "@/interfaces/services";

export interface IController {
    list: (req: Request, res: Response) => Promise<Response | void>;
    show: (req: Request, res: Response) => Promise<Response | void>;
    create: (req: Request, res: Response) => Promise<Response | void>;
    update: (req: Request, res: Response) => Promise<Response | void>;
    remove: (req: Request, res: Response) => Promise<Response | void>;
    patch: (req: Request, res: Response) => Promise<Response | void>;
}

export abstract class Controller implements IController {

    protected readonly service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    abstract list(req: Request, res: Response): Promise<Response | void>;
    abstract show(req: Request, res: Response): Promise<Response | void>;
    abstract create(req: Request, res: Response): Promise<Response | void>;
    abstract update(req: Request, res: Response): Promise<Response | void>;
    abstract remove(req: Request, res: Response): Promise<Response | void>;
    abstract patch(req: Request, res: Response): Promise<Response | void>;
}
