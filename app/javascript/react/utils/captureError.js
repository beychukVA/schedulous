"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function captureError(error) {
    if (process.env.NODE_ENV === "production") {
        // TODO: Send error to Sentry
        // eslint-disable-next-line no-console
        console.error(error);
    }
    else {
        throw error;
    }
}
exports.default = captureError;
