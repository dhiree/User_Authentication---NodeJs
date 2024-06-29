/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { UserInterface } from '../interfaces/user.interface';
declare class UserService {
    user: import("mongoose").Model<UserInterface & import("mongoose").Document<unknown, any, any>, {}, {}, {}, import("mongoose").Document<unknown, {}, UserInterface & import("mongoose").Document<unknown, any, any>> & UserInterface & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>, any>;
    createUser(userData: UserInterface): Promise<import("mongoose").Document<unknown, {}, UserInterface & import("mongoose").Document<unknown, any, any>> & UserInterface & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    getAllUsers(): Promise<UserInterface[]>;
    getUserById(userId: any): Promise<import("mongoose").Document<unknown, {}, UserInterface & import("mongoose").Document<unknown, any, any>> & UserInterface & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    updateUserById(userId: any, userData: any): Promise<import("mongoose").Document<unknown, {}, UserInterface & import("mongoose").Document<unknown, any, any>> & UserInterface & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    updateUserData(userId: string, userData: any): Promise<UserInterface | null>;
    deleteUser(userId: string): Promise<UserInterface | null>;
}
export default UserService;
