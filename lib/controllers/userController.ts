import { Request, Response } from "express";
import { failureResponse, insufficientParameters, mongoError, successResponse } from "../modules/common/service";
import { IUser } from "../modules/users/model";
import UserService from "../modules/users/service";

export class UserController {

    private userService: UserService = new UserService();

    public findAll(req: Request, res: Response) {
        this.userService.findAll((err: any, data: IUser[]) => {
            if (err) {
                mongoError(err, res);
            } else {
                successResponse('find all users successfull', data, res);
            }
        });
    }

    public findById(req: Request, res: Response) {
        if (req.params.id) {
            this.userService.findById(req.params.id, (err: any, user: IUser) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('find user by id successfull', user, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public createUser(req: Request, res: Response) {
        if (req.body.name || req.body.name !== "") {
            const user: IUser = {
                name: req.body.name
            };

            this.userService.createUser(user, (err: any, user: IUser) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('create user successfull', user, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public updateUser(req: Request, res: Response) {
        if (req.params.id && req.body.name) {
            const user: IUser = {
                _id: req.params.id,
                name: req.body.name
            };

            this.userService.updateUser(user, (err: any, user: IUser) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('update user successfull', user, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public deleteUser(req: Request, res: Response) {
        if (req.params.id) {
            this.userService.deleteUser(req.params.id, (err: any, deleteDetails) => {
                if (err) {
                    mongoError(err, res);
                } else if (deleteDetails.deleteCount !== 0) {
                    successResponse('delete user successfull', null, res);
                } else {
                    failureResponse('invalid user', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }
}