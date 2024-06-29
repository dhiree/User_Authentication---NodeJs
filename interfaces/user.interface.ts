export interface UserInterface {
    name: string;
    email: string;
    age: Number;
    city: string,
    zipcode: Number,
    status: String
}

export interface UserWithIdInterface extends UserInterface {
    _id: Number,
    createdAt: Date,
    updatedAt: Date,
}