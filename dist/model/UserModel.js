"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
const userModel = mongoose_1.model('User', userSchema);
exports.default = userModel;
//# sourceMappingURL=UserModel.js.map