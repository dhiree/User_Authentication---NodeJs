import { Router } from 'express';
import { Routes } from "../interfaces/routes.interface";
import UserController from '../controller/user.controller'

class UserRoute implements Routes {
    public path = '/users';
    public router = Router();
    public userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.post(`${this.path}/`, this.userController.createUser);
        this.router.get(`${this.path}/`, this.userController.listUsers);
        this.router.get(`${this.path}/:userId`, this.userController.getUserDetails);
        this.router.patch(`${this.path}/:userId`, this.userController.updateUserData);
        this.router.put(`${this.path}/:userId`, this.userController.updateUserById);
        this.router.delete(`${this.path}/:userId`, this.userController.softDeleteUser);

    }
}
export default UserRoute;
