import { Request, Response, NextFunction } from "express"
import Validate from '../validation/joi-validation';
import { lookup } from "../utils/zipcode";
import userService from '../services/user.service'

class UserController {

    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userData = req.body;
            const { error } = await Validate.createUser(userData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const { status } = await lookup(userData.zipcode);
            if (status) {
                throw new Error("Invalid Postal Code!");
            }
            const newUser = await userService.createUser(userData);
            res.status(201).json({
                newUser
            });
        } catch (error) {
            next(error);
        }
    }


    public async listUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const allUsers = await userService.listUsers();
            res.status(200).json({
                data: allUsers,
                message: "Success",
            });
        } catch (error) {
            console.error('Error fetching all users:', error);
            next(error);
        }
    }

    public async getUserDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { userId } = req.params
            const user = await userService.getUserDetails(userId);
            if (!user) {
                throw new Error('User Not Found!');
            }
            res.status(200).json({
                data: user,
                message: "Success"
            });
        } catch (error) {
            next(error);
        }
    }


    public async updateUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { userId } = req.params
            const userData = req.body
            const updateUser = await userService.updateUserById(userId, userData)
            if (!updateUser) {
                console.log("User Not Found")
            }
            res.status(200).json({
                data: updateUser,
                message: "User Updated"
            })
        } catch (error) {
            console.log("User Not Updated", error)
            next(error)
        }
    }


    public async updateUserData(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { userId } = req.params;
            const userDataToUpdate = req.body;
            const updatedUser = await userService.updateUserData(userId, userDataToUpdate);
            res.status(200).json({
                data: updatedUser,
                message: 'User Updated Successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    public async softDeleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.params
            const deleteUser = await userService.softDeleteUser(userId)
            res.status(200).json({
                data: { msg: "User Deleted" }
            })
        } catch (error) {
            next(error)
        }
    }
}

export default UserController;