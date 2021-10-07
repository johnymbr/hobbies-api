import { HobbyController } from "../controllers/hobbyController";
import { Application, Request, Response } from "express";

/**
 *  @swagger
 *     tags:
 *       name: Hobby
 *       description: API to manage your hobbies.
 */
export class HobbyRoutes {

    private hobbyController: HobbyController = new HobbyController();

    public route(app: Application) {
        /**
         * @swagger
         * /api/hobbies/by-user/{userId}:
         *   get:
         *     summary: Retrieve all hobbies of the user informed.
         *     description: Retrieve a list of all hobbies of the user informed.
         *     tags: [Hobby]
         *     parameters:
         *       - in: path
         *         name: userId
         *         required: true
         *         description: Id of the user.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: A list of hobbies
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
         *                     $ref: '#/components/schemas/Hobby'
         */        
        app.get('/api/hobbies/by-user/:userId', (req: Request, res: Response) => {
            this.hobbyController.findByUserId(req, res);
        });

        /**
         * @swagger
         * /api/hobbies/{id}:
         *   get:
         *     summary: Retrieve a specific hobby.
         *     tags: [Hobby]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         description: Id of the hobby to retrieve.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: hobby 
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
         *                   $ref: '#/components/schemas/Hobby'
         */
        app.get('/api/hobbies/:id', (req: Request, res: Response) => {
            this.hobbyController.findById(req, res);
        });
        
        /**
         * @swagger
         * /api/hobbies/{userId}:
         *   post:
         *     summary: Create a new hobby.
         *     tags: [Hobby]
         *     parameters:
         *       - in: path
         *         name: userId
         *         required: true
         *         description: Id of the user.
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema: 
         *             type: object
         *             properties:
         *               experienceLevel:
         *                 type: string
         *                 description: experienceLevel for hobby. must be 'Baixa', 'Médio', 'Alta' or 'Muito alta'.
         *               name:
         *                 type: string
         *                 description: hobby's name.
         *               year:
         *                 type: integer
         *                 description: hobby's year.
         *     responses:
         *       200:
         *         description: Hobby
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
         *                   $ref: '#/components/schemas/Hobby'
         */
        app.post('/api/hobbies/:userId', (req: Request, res: Response) => {
            this.hobbyController.createHobby(req, res);
        });

        /**
         * @swagger
         * /api/hobbies/{id}:
         *   put:
         *     summary: Update a hobby.
         *     tags: [Hobby]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         description: Id of the hobby.
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema: 
         *             type: object
         *             properties:
         *               experienceLevel:
         *                 type: string
         *                 description: experienceLevel for hobby. must be 'Baixa', 'Médio', 'Alta' or 'Muito alta'.
         *               name:
         *                 type: string
         *                 description: hobby's name.
         *               year:
         *                 type: integer
         *                 description: hobby's year.
         *               user:
         *                 type: string
         *                 description: Id of user.
         *     responses:
         *       200:
         *         description: Hobby
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
         *                   $ref: '#/components/schemas/Hobby'
         */
        app.put('/api/hobbies/:id', (req: Request, res: Response) => {
            this.hobbyController.updateHobby(req, res);
        });

        /**
         * @swagger
         * /api/hobbies/{id}:
         *   delete:
         *     summary: Delete a hobby.
         *     tags: [Hobby]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         description: Id of the hobby to retrieve.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Delete a hobby and return an empty body.
         */        
        app.delete('/api/hobbies/:id', (req: Request, res: Response) => {
            this.hobbyController.deleteHobby(req, res);
        });
    }
}