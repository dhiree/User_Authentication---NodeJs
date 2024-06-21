import userModel from '../model/usermodel';
import { UserInterface } from '../interfaces/routes.interface';
import jwt from 'jsonwebtoken'


class UserService {
    public async createUser(userData: UserInterface) {
        try {
            const newUser = await userModel.create(userData);
            return newUser;
        } catch (error: any) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    public async login(email: string, password: string): Promise<string | undefined> {
        try {
            // Check if user with provided email and password exists
            const user = await userModel.findOne({ email, password });
            if (!user) {
                throw new Error('Invalid email or password');
            }

            // Generate JWT token
            const token = jwt.sign({ user }, 'your-secret-token', { expiresIn: '1h' });
            return token;
        } catch (error) {
            console.error('Error during login:');
            throw new Error('Invalid email or password'); // Rethrow the error to maintain consistent error message
        }
    }
}

export default new UserService();
