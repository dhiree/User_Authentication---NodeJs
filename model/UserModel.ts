
import { model, Schema, Document } from 'mongoose';
import { UserWithIdInterface } from '../interfaces/user.interface';

const userSchema: Schema<UserWithIdInterface & Document> = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps: true });

const userModel = model<UserWithIdInterface & Document>('User', userSchema);

export default userModel;
