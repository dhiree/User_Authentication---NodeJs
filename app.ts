import mongoose from 'mongoose';
import express, { Router } from "express"
import dotenv from 'dotenv'
import { Routes } from './interfaces/routes.interface';

dotenv.config()

class App {
    public app: express.Application;
    public port: number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = 8000;

        this.configureMiddleware();
        this.connectDatabase();
        this.initializeRoutes(routes);
    }

    private configureMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private connectDatabase(): void {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            console.error('MongoDB URI missing in .env file');
            process.exit(1);
        }

        mongoose.connect(mongoUri, {
        }).then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.error('MongoDB connection error:', error);
        });
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/worko', route.router);
        });
    }
    public async listen() {

        this.app.listen(this.port, () => {
            console.log("app start ", this.port);
            console.log(`=================================`);
            console.log(`🚀 App listening on the port ${this.port}`);
            console.log(`=================================`);
        });
    }
    public getServer() {
        return this.app;
    }
}

export default App;