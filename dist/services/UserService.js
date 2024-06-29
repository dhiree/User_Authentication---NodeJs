"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UserModel_1 = tslib_1.__importDefault(require("../model/UserModel"));
class UserService {
    constructor() {
        this.user = UserModel_1.default;
    }
    async createUser(userData) {
        try {
            const newUser = await UserModel_1.default.create(userData);
            return newUser;
        }
        catch (error) {
            throw new Error(`Error creating user: `);
        }
    }
    async getAllUsers() {
        try {
            console.log("inside getAllUsers");
            const users = await this.user.find();
            if (!users) {
                throw new Error('No users found');
            }
            return users;
        }
        catch (error) {
            throw new Error(`Error fetching users: `);
        }
    }
    async getUserById(userId) {
        try {
            const user = await UserModel_1.default.findOne({ _id: userId });
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        }
        catch (error) {
            throw new Error(`Error fetching user:`);
        }
    }
    async updateUserById(userId, userData) {
        return await UserModel_1.default.findByIdAndUpdate(userId, userData);
    }
    async updateUserData(userId, userData) {
        try {
            const updatedUser = await UserModel_1.default.findByIdAndUpdate(userId, userData);
            if (!updatedUser) {
                throw new Error('User not found');
            }
            return updatedUser;
        }
        catch (error) {
            throw new Error('Error updating user');
        }
    }
    async deleteUser(userId) {
        try {
            const deletedUser = await UserModel_1.default.findOneAndUpdate({ _id: userId }, { status: 'inactive' });
            if (!deletedUser) {
                throw new Error('User not found');
            }
            return deletedUser;
        }
        catch (error) {
            throw new Error('Error deleting user:');
        }
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map