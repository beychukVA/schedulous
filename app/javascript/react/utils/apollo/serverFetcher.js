"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
class ServerFetcher {
    constructor(req) {
        this.resHeaders = [];
        this.fetch = (url, options) => {
            options = Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, options.headers), this.reqHeaders) });
            return (0, isomorphic_unfetch_1.default)(url, options).then((res) => {
                const setCookie = res.headers.raw()['set-cookie'];
                if (setCookie) {
                    if (typeof setCookie === 'string') {
                        this.resHeaders.push(['Set-Cookie', setCookie]);
                    }
                    else {
                        this.resHeaders = this.resHeaders.concat(setCookie.map((value) => ['Set-Cookie', value]));
                    }
                }
                return res;
            });
        };
        this.reqHeaders = {
            cookie: req.headers.cookie,
            'User-Agent': req.headers['user-agent'],
        };
        if (req.headers['x-forwarded-for']) {
            this.reqHeaders['X-Forwarded-For'] = req.headers['x-forwarded-for'];
        }
    }
    setResponseHeaders(res) {
        this.resHeaders.forEach(([name, value]) => {
            res.setHeader(name, value);
        });
    }
}
exports.default = ServerFetcher;
