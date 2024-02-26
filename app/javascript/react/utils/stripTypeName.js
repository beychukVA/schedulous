"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripTypeName(object) {
    if (Array.isArray(object)) {
        return object.map((item) => stripTypeName(item));
    }
    if (typeof object === "object") {
        const result = {};
        Object.keys(object).forEach((key) => {
            if (key !== "__typename") {
                result[key] = stripTypeName(object[key]);
            }
        });
        return result;
    }
    return object;
}
exports.default = stripTypeName;
