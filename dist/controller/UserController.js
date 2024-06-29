"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const joi_validation_1 = tslib_1.__importDefault(require("../validation/joi-validation"));
const zipcode_1 = require("../utils/zipcode");
const UserService_1 = tslib_1.__importDefault(require("../services/UserService"));
class UserController {
    constructor() {
        this.userService = new UserService_1.default();
        // public async listUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        //     try {
        //         console.log("Inside listUsers", await this.userService.getAllUsers());
        //         return;
        //         const allUsers = await this.userService.getAllUsers();
        //         res.status(200).json({
        //             data: allUsers,
        //             message: "Success",
        //         });
        //     } catch (error) {
        //         console.error('Error fetching all users:', error);
        //         next(error);
        //     }
        // }
        // public async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        //     try {
        //         const { userId } = req.params
        //         const user = await this.userService.getUserById(userId);
        //         if (!user) {
        //             throw new Error('User Not Found!');
        //         }
        //         res.status(200).json({
        //             data: user,
        //             message: "Success"
        //         });
        //     } catch (error) {
        //         next(error);
        //     }
        // }
        // public async updateUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        //     try {
        //         const { userId } = req.params
        //         const userData = req.body
        //         const updateUser = await this.userService.updateUserById(userId, userData)
        //         if (!updateUser) {
        //             console.log("User Not Found")
        //         }
        //         res.status(200).json({
        //             data: updateUser,
        //             message: "User Updated"
        //         })
        //     } catch (error) {
        //         console.log("User Not Updated", error)
        //         next(error)
        //     }
        // }
        // public async patchUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        //     try {
        //         const { userId } = req.params;
        //         const userDataToUpdate = req.body;
        //         const updatedUser = await this.userService.updateUserData(userId, userDataToUpdate);
        //         res.status(200).json({
        //             data: updatedUser,
        //             message: 'User Updated Successfully'
        //         });
        //     } catch (error) {
        //         next(error);
        //     }
        // }
        // public async deleteUserById(req: Request, res: Response, next: NextFunction) {
        //     try {
        //         const { userId } = req.params
        //         const deleteUser = await this.userService.deleteUser(userId)
        //         res.status(200).json({
        //             data: { msg: "User Deleted" }
        //         })
        //     } catch (error) {
        //         console.log("user not deleted")
        //         next(error)
        //     }
        // }
    }
    async createUser(req, res, next) {
        try {
            const userData = req.body;
            console.log("Inside create user", await this.userService);
            return;
            const { error } = await joi_validation_1.default.createUser(userData);
            if (error) {
                throw new Error(error.details[0].message);
            }
            const { status } = await zipcode_1.lookup(userData.zipcode);
            if (status) {
                throw new Error("Invalid Postal Code!");
            }
            // const newUser = await this.userService.createUser(userData);
            res.status(201).json();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map