import { IHobby } from "../hobbies/model";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: user id in db.
 *         name:
 *           type: string
 *           description: user's name.
 *         hobbies:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Hobby'
 */
export interface IUser {
    _id?: String;
    name: String;
    hobbies?: IHobby[];
}