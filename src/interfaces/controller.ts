import { Request, Response } from "express";
import { Service } from "@/interfaces/services";

export abstract class Controller {

    protected readonly service: Service;

    constructor(service: Service) {
        this.service = service;
    }
}
