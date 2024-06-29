"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
class App {
    constructor(routes) {
        this.app = express_1.default();
        this.port = 8000;
        this.configureMiddleware();
        this.connectDatabase();
        this.initializeRoutes(routes);
    }
    configureMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    connectDatabase() {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            console.error('MongoDB URI missing in .env file');
            process.exit(1);
        }
        mongoose_1.default.connect(mongoUri, {}).then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.error('MongoDB connection error:', error);
        });
    }
    initializeRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
    async listen() {
        this.app.listen(this.port, () => {
            console.log("app start ", this.port);
            console.log(`=================================`);
            console.log(`🚀 App listening on the port ${this.port}`);
            console.log(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map