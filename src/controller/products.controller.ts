import { Request, Response } from "express";
import { createResponseError, createResponseSuccess } from "@/interfaces/responses/response.interface";
import { HTTP_STATUS_CODES, HTTP_STATUS_CODES_MESSAGES } from "@/lib/constants/http.constants";
import { Controller } from "@/interfaces/controller";
import { ProductsService } from "@/services/products.service";

export class ProductsController extends Controller {

    constructor(productsService: ProductsService) {
        super(productsService);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        try {
            return createResponseSuccess(res, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Products list" });
        } catch (error) {
            return createResponseError(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            return createResponseSuccess(res, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Product detail", id: req.params.id });
        } catch (error) {
            return createResponseError(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            return createResponseSuccess(res, HTTP_STATUS_CODES.CREATED, HTTP_STATUS_CODES_MESSAGES.CREATED, { message: "Product created" });
        } catch (error) {
            return createResponseError(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    public async updateById(req: Request, res: Response): Promise<Response> {
        try {
            return createResponseSuccess(res, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Product updated", id: req.params.id });
        } catch (error) {
            return createResponseError(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    public async removeById(req: Request, res: Response): Promise<Response> {
        try {
            return createResponseSuccess(res, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Product deleted", id: req.params.id });
        } catch (error) {
            return createResponseError(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }

    public async patchById(req: Request, res: Response): Promise<Response> {
        try {
            return createResponseSuccess(res, HTTP_STATUS_CODES.OK, HTTP_STATUS_CODES_MESSAGES.OK, { message: "Product patched", id: req.params.id });
        } catch (error) {
            return createResponseError(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, HTTP_STATUS_CODES_MESSAGES.INTERNAL_SERVER_ERROR, (error as Error).message);
        }
    }
}
