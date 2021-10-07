import { UserController } from "../controllers/userController";
import { Application, Request, Response } from "express";

/**
 *  @swagger
 *     tags:
 *       name: User
 *       description: API to manage your users.
 */
export class UserRoutes {

    private userController: UserController = new UserController();

    public route(app: Application) {
        /**
         * @swagger
         * /api/users:
         *   get:
         *     summary: Retrieve all users.
         *     description: Retrieve a list of all users.
         *     tags: [User]
         *     responses:
         *       200:
         *         description: A list of users
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 status:
         *                   type: string
         *                 message:
         *                   type: string
         *                 data:
         *                   type: array
         *                   items:
         *                     $ref: '#/components/schemas/User'
         */
        app.get('/api/users', (req: Request, res: Response) => {
            this.userController.findAll(req, res);
        });

        /**
         * @swagger
         * /api/users/{id}:
         *   get:
         *     summary: Retrieve user by id.
         *     description: Retrieve a user by id.
         *     tags: [User]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         description: Id of the user to retrieve.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: User
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 status:
         *                   type: string
         *                 message:
         *                   type: string
         *                 data:
         *                   $ref: '#/components/schemas/User'
         */
        app.get('/api/users/:id', (req: Request, res: Response) => {
            this.userController.findById(req, res);
        });

        /**
         * @swagger
         * /api/users:
         *   post:
         *     summary: Create a new user.
         *     description: Create a new user.
         *     tags: [User]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema: 
         *             type: object
         *             properties:
         *               name:
         *                 type: string
         *                 description: user's name
         *     responses:
         *       200:
         *         description: User
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 status:
         *                   type: string
         *                 message:
         *                   type: string
         *                 data:
         *                   $ref: '#/components/schemas/User'
         */
        app.post('/api/users', (req: Request, res: Response) => {
            this.userController.createUser(req, res);
        });

        /**
         * @swagger
         * /api/users/{id}:
         *   put:
         *     summary: Update a user.
         *     tags: [User]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         description: Id of the user to retrieve.
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema: 
         *             type: object
         *             properties:
         *               name:
         *                 type: string
         *                 description: user's name
         *     responses:
         *       200:
         *         description: User
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 status:
         *                   type: string
         *                 message:
         *                   type: string
         *                 data:
         *                   $ref: '#/components/schemas/User'
         */
        app.put('/api/users/:id', (req: Request, res: Response) => {
            this.userController.updateUser(req, res);
        });

        /**
         * @swagger
         * /api/users/{id}:
         *   delete:
         *     summary: Delete a user.
         *     tags: [User]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         description: Id of the user to retrieve.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Delete a user and return an empty body.
         */
        app.delete('/api/users/:id', (req: Request, res: Response) => {
            this.userController.deleteUser(req, res);
        });
    }
}