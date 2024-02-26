"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
const config_1 = require("~/config");
const recordRequestsInFlight_1 = __importDefault(require("./recordRequestsInFlight"));
const graphql_1 = require("~/utils/graphql");
function createClient(initialState, { fetch }) {
    const headers = {
        'X-Requested-With': 'XMLHttpRequest',
    };
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
    }
    return new apollo_boost_1.ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: false,
        link: (0, recordRequestsInFlight_1.default)(new apollo_boost_1.HttpLink({
            uri: config_1.GRAPHQL_URI,
            credentials: 'include',
            headers,
            fetch: fetch || global.fetch,
        })),
        cache: new apollo_boost_1.InMemoryCache({
            dataIdFromObject: graphql_1.dataIdFromObject,
            freezeResults: true,
        }).restore(initialState || {}),
        assumeImmutableResults: true,
    });
}
let apolloClient = null;
function initApollo(initialState, options = {}) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        return createClient(initialState, options);
    }
    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = createClient(initialState, options);
    }
    return apolloClient;
}
exports.default = initApollo;
