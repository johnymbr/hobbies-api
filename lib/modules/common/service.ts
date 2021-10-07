import { Response } from "express";
import { responseStatusCodes } from "./model";

export function successResponse(message: string, data: any, res: Response) {
    res.status(responseStatusCodes.success).json({
        status: 'success',
        message: message,
        data
    });
}

export function failureResponse(message: string, data: any, res: Response) {
    res.status(responseStatusCodes.success).json({
        status: 'failure',
        message: message,
        data
    });
}

export function insufficientParameters(res: Response) {
    res.status(responseStatusCodes.badRequest).json({
        status: 'failure',
        message: 'Insufficient parameters',
        data: {}
    });
}

export function mongoError(err: any, res: Response) {
    res.status(responseStatusCodes.internalServerError).json({
        status: 'failure',
        message: 'MongoDB error',
        data: err
    });
}