import { Response } from "express";

interface IResponse<T> {
    statusCode: number;
    message: string;
    data: T;
}

interface IResponseError {
    statusCode: number;
    error: string;
    details: string;
}

function createResponseSuccess<T>(response: Response, statusCode: number, message: string, data: T): Response<IResponse<T>> {
    return response.status(statusCode).json({
        statusCode,
        message,
        data,
    });
}

function createResponseError(response: Response, statusCode: number, error: string, details: string): Response<IResponseError> {
    return response.status(statusCode).json({
        statusCode,
        error,
        details,
    });
}

export { IResponse, IResponseError, createResponseSuccess, createResponseError };