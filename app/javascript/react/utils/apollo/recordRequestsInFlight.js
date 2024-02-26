"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_link_1 = require("apollo-link");
const config_1 = require("~/config");
let recordRequestsInFlight = (networkLink) => networkLink;
if (config_1.environment.isBrowser && config_1.environment.isTest) {
    recordRequestsInFlight = (networkLink) => {
        const recorderLink = new apollo_link_1.ApolloLink((operation, forward) => {
            window.test.apolloRequestsInFlight += 1;
            return forward(operation).map((result) => {
                window.test.apolloRequestsInFlight -= 1;
                return result;
            });
        });
        return (0, apollo_link_1.concat)(recorderLink, networkLink);
    };
}
exports.default = recordRequestsInFlight;
