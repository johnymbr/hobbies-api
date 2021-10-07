import { Request, Response } from "express";
import { failureResponse, insufficientParameters, mongoError, successResponse } from "../modules/common/service";
import { IHobby } from "../modules/hobbies/model";
import HobbyService from "../modules/hobbies/service";

export class HobbyController {

    private hobbyService: HobbyService = new HobbyService();

    public findByUserId(req: Request, res: Response) {
        if (req.params.userId) {
            this.hobbyService.findByUserId(req.params.userId, (err: any, data: IHobby[]) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('find all hobbies of the user successfull', data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public findById(req: Request, res: Response) {
        if (req.params.id) {
            this.hobbyService.findById(req.params.id, (err: any, hobby: IHobby) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('find hobby by id successfull', hobby, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public createHobby(req: Request, res: Response) {
        if (req.params.userId && req.body.experienceLevel && req.body.name && req.body.year) {
            const hobby: IHobby = {
                experienceLevel: req.body.experienceLevel,
                name: req.body.name,
                year: req.body.year,
                user: req.params.userId
            };

            if (this.validateExperienceLevel(req.body.experienceLevel)) {
                this.hobbyService.createHobby(hobby, (err: any, hobby: IHobby) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('create hobby successfull', hobby, res);
                    }
                });
            } else {
                failureResponse('invalid experience level', null, res);
            }
        } else {
            insufficientParameters(res);
        }
    }

    public updateHobby(req: Request, res: Response) {
        if (req.params.id && req.body.user && req.body.experienceLevel && req.body.name && req.body.year) {
            const hobby: IHobby = {
                _id: req.params.id,
                experienceLevel: req.body.experienceLevel,
                name: req.body.name,
                year: req.body.year,
                user: req.body.user
            };

            if (this.validateExperienceLevel(req.body.experienceLevel)) {
                this.hobbyService.updateHobby(hobby, (err: any, hobby: IHobby) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('update hobby successfull', hobby, res);
                    }
                });
            } else {
                failureResponse('invalid experience level', null, res);
            }
        } else {
            insufficientParameters(res);
        }
    }

    public deleteHobby(req: Request, res: Response) {
        if (req.params.id) {
            this.hobbyService.deleteHobby(req.params.id, (err: any, deleteDetails) => {
                if (err) {
                    mongoError(err, res);
                } else if (deleteDetails.deleteCount !== 0) {
                    successResponse('delete hobby successfull', null, res);
                } else {
                    failureResponse('invalid user', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    private validateExperienceLevel(expLevel: string) {
        if (expLevel !== 'Baixa' && expLevel !== 'Médio' && expLevel !== 'Alta' && expLevel !== 'Muito alta') {
            return false;
        }

        return true;
    }
}