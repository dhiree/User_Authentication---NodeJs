"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const UserController_1 = tslib_1.__importDefault(require("../controller/UserController"));
const router = express_1.Router();
const userController = new UserController_1.default();
class UserRoute {
    constructor() {
        this.path = '/users';
        this.router = express_1.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // this.router.get('/users', userController.listUsers);
        this.router.post('/create', userController.createUser);
        // this.router.post(`${this.path}/:id`, this.heroNFTController.updateNFTById);
        // this.router.get(`${this.path}/TokenId/:tokenId`, this.heroNFTController.getTokendetail)
    }
}
exports.default = UserRoute;
//# sourceMappingURL=UserRoute.js.map