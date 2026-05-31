import { Request, Response } from "express";
import { HTTP_STATUS_CODES_MESSAGES, HTTP_STATUS_CODES } from "@/lib/constants/http.constants";
import { createResponseError, createResponseSuccess } from "@/interfaces/responses/response.interface";
import { Controller } from "@/interfaces/controller";
import { UsersService } from "@/services/user.service";

export default class UsersController extends Controller<UsersService> {

    constructor() {
        super(new UsersService());
    }

    async list(request: Request, response: Response): Promise<Response> {
        try {
            const data = this.service.getUser(1);

            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, data);
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }


    async get(request: Request, response: Response): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }   
    }

    async post(request: Request, response: Response): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.CREATED, HTTP_STATUS_CODES_MESSAGES.CREATED, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    async put(request: Request, response: Response): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    async delete(request: Request, response: Response): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    async patch(request: Request, response: Response): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }
}
