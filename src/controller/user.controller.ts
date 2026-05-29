import { Request, Response } from "express";
import { HTTP_STATUS_CODES_MESSAGES, HTTP_STATUS_CODES } from "@/lib/constants/http.constants";
import { createResponseError, createResponseSuccess } from "@/interfaces/responses/response.interface";

class UserController {

    async get(response: Response, request: Request): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }   
    }

    async post(response: Response, request: Request): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.CREATED, HTTP_STATUS_CODES_MESSAGES.CREATED, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    async put(response: Response, request: Request): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    async delete(response: Response, request: Request): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    async patch(response: Response, request: Request): Promise<Response> {
        try {
            return createResponseSuccess(response, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Hello World" });
        } catch (error) {
            return createResponseError(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }
}

export default UserController;