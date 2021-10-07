import * as express from "express";
import * as mongoose from "mongoose";
import * as swaggerJsDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";
import { HobbyRoutes } from "../routes/hobbyRoutes";
import { UserRoutes } from "../routes/userRoutes";
import env from "../environment";
import { CommonRoutes } from "../routes/commonRoutes";
import { TestRoutes } from "../routes/test_routes";

class App {
    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/' + env.getDBName();

    // Routes
    private testRoutes: TestRoutes = new TestRoutes();
    private commonRoutes: CommonRoutes = new CommonRoutes();
    private userRoutes: UserRoutes = new UserRoutes();
    private hobbyRoutes: HobbyRoutes = new HobbyRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.configSwaggerJSDoc();
        this.userRoutes.route(this.app);
        this.hobbyRoutes.route(this.app);
        this.commonRoutes.route(this.app);
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private configSwaggerJSDoc() {
        const swaggerDefinition = {
            openapi: '3.0.0',
            info: {
                title: 'Express API for hobbies-api',
                version: '1.0.0',
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Development server',
                },
            ],
        };

        const options: swaggerJsDoc.Options = {
            definition: swaggerDefinition,
            // apis: ["../routes/*.js", "../modules/**/*.js"]
            apis: ["**/*.ts"]
        }

        this.app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;