"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const UserRoute_1 = tslib_1.__importDefault(require("./routes/UserRoute"));
const app = new app_1.default([
    new UserRoute_1.default()
]);
console.log("sever");
app.listen();
//# sourceMappingURL=server.js.map