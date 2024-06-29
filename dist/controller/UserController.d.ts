import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";
declare class UserController {
    userService: UserService;
    createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default UserController;
