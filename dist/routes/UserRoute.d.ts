import { Routes } from "../interfaces/routes.interface";
declare class UserRoute implements Routes {
    path: string;
    router: any;
    constructor();
    private initializeRoutes;
}
export default UserRoute;
