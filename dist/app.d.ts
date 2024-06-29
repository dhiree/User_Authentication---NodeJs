import express from "express";
import { Routes } from './interfaces/routes.interface';
declare class App {
    app: express.Application;
    port: number;
    constructor(routes: Routes[]);
    private configureMiddleware;
    private connectDatabase;
    private initializeRoutes;
    listen(): Promise<void>;
    getServer(): express.Application;
}
export default App;
