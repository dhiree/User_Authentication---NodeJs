"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const zipcodes_1 = tslib_1.__importDefault(require("zipcodes"));
async function lookup(zipcode) {
    const resp = zipcodes_1.default.lookup(zipcode);
    if (resp) {
        return { status: 0 };
    }
    else {
        return { status: 1 };
    }
}
exports.lookup = lookup;
//# sourceMappingURL=zipcode.js.map