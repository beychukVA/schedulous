"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRAPHQL_URI = exports.environment = void 0;
exports.environment = {
    isTest: process.env.NODE_ENV === "test",
    isProduction: process.env.NODE_ENV === "production",
    isBrowser: typeof window !== "undefined",
};
exports.GRAPHQL_URI = "/graphql";
