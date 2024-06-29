import userModel from '../model/UserModel'
import { UserWithIdInterface } from '../interfaces/user.interface'
import { DocumentType } from '@typegoose/typegoose';


class userService {
    public async createUser(userData: UserWithIdInterface) {
        try {
            const newUser = await userModel.create(userData as DocumentType<UserWithIdInterface>);
            return newUser;
        } catch (error) {
            throw new Error(`Error creating user: `);
        }
    }

    public async listUsers(): Promise<UserWithIdInterface[]> {
        try {
            const users = await userModel.find();
            if (!users) {
                throw new Error('No users found');
            }
            return users;
        } catch (error) {
            throw new Error(`Error fetching users: `);
        }
    }

    public async getUserDetails(userId: any) {
        try {
            const user = await userModel.findOne({ _id: userId });
            if (!user) {
                throw new Error('User not found');
            }
            return user
        } catch (error) {
            throw new Error(`Error fetching user:`);
        }
    }


    public async updateUserById(userId: any, userData: any) {
        return await userModel.findByIdAndUpdate(userId, userData)
    }

    public async updateUserData(userId: string, userData: any): Promise<UserWithIdInterface | null> {
        try {
            const updatedUser = await userModel.findByIdAndUpdate(userId, userData);
            if (!updatedUser) {
                throw new Error('User not found');
            }
            return updatedUser;
        } catch (error) {
            throw new Error('Error updating user');
        }
    }


    public async softDeleteUser(userId: string): Promise<UserWithIdInterface | null> {
        try {
            const deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { status: 'inactive' });
            if (!deletedUser) {
                throw new Error('User not found');
            }
            return deletedUser;
        } catch (error) {
            throw new Error('Error deleting user:');
        }
    }
}

export default new userService();
