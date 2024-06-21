import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import Validate from '../validation/jio-validation';
import { HttpException } from '../httpError/HTTPerror'

class UserController {
    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userData = req.body;
            const { error } = await Validate.createUser(userData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const token = await UserService.login(email, password);
            res.status(200).json({ token });
        } catch (error) {
            console.error('Error during login:', error);
            res.status(401).json({ error });
        }
    }
}

export default new UserController();
