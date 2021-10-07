import { IUser } from "modules/users/model";
import { ObjectId } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Hobby:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: hobby id in db.
 *         experienceLevel:
 *           type: string
 *           description: experienceLevel for hobby. must be 'Baixa', 'Médio', 'Alta' or 'Muito alta'.
 *         name:
 *           type: string
 *           description: hobby's name.
 *         year:
 *           type: integer
 *           description: hobby's year.
 *         user:
 *           oneOf:
 *             - type: string
 *             - $ref: '#/components/schemas/User'
 */
export interface IHobby {
    _id?: String;
    experienceLevel: String;
    name: String;
    year: Number;
    user: String | IUser;
}