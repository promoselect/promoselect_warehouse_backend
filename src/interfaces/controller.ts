import { Request, Response } from "express";
import { Service } from "@/interfaces/services";

export abstract class Controller<T extends Service = Service> {

    protected readonly service: T;

    constructor(service: T) {
        this.service = service;
    }
}
