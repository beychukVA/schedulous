"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Error_1 = __importDefault(require("~/pages/Error"));
const FeaturesQuery_1 = __importDefault(require("./FeaturesQuery"));
const HeadTags_1 = __importDefault(require("./HeadTags"));
const LoadingState_1 = __importDefault(require("./LoadingState"));
const RequireLogin_1 = __importDefault(require("./RequireLogin"));
const context_1 = __importDefault(require("./context"));
const browserRedirect_1 = __importDefault(require("~/utils/browserRedirect"));
const paths_1 = __importDefault(require("~/paths"));
const react_apollo_1 = require("react-apollo");
const config_1 = require("~/config");
function createPage({ component, query, queryVariables, requireLogin, requirePermissions, requireFeature, requireWhitelist, tags, title, titleNoPrefix, }) {
    const Component = component;
    let updatedQuery = null;
    function Page({ params }) {
        if (!updatedQuery || !config_1.environment.isBrowser) {
            updatedQuery = (0, context_1.default)(query);
        }
        return (<react_apollo_1.Query query={updatedQuery}>
        {({ client, loading, error, data, variables, refetch, fetchMore, networkStatus, }) => {
                if (error) {
                    if (isNotFoundError(error) || isAccessDeniedError(error)) {
                        return <Error_1.default statusCode={404}/>;
                    }
                    return <Error_1.default statusCode={500}/>;
                }
                if ((loading && isNetworkFetchingMore(networkStatus)) || !data) {
                    return <LoadingState_1.default />;
                }
                if (requirePermissions && !requirePermissions(data)) {
                    return <Error_1.default statusCode={401}/>;
                }
                if (requireWhitelist && requireWhitelist(data)) {
                    if (process.browser) {
                        if (params.requestBrowserPush) {
                            (0, browserRedirect_1.default)(paths_1.default.sign.waitlist() + "?requestBrowserPush=true");
                        }
                        else {
                            (0, browserRedirect_1.default)(paths_1.default.sign.waitlist());
                        }
                    }
                    return null;
                }
                const Wrap = requireLogin ? RequireLogin_1.default : React.Fragment;
                return (<Wrap>
              <HeadTags_1.default titleNoPrefix={titleNoPrefix} tags={typeof tags === "function" ? tags(data) : tags} title={typeof title === "function" ? title(data) : title}/>
              <Component client={client} params={params} data={data} variables={variables} refetch={refetch} fetchMore={fetchMore} loading={loading && isNetworkRequestInFlight(networkStatus)}/>
            </Wrap>);
            }}
      </react_apollo_1.Query>);
    }
    Page.displayName = `page(${Component.displayName || Component.name || "Page"})`;
    Page.getInitialProps = requireFeature
        ? (context) => __awaiter(this, void 0, void 0, function* () {
            return getInitialPropsWithFeature(requireFeature, context);
        })
        : getInitialPageProps;
    return Page;
}
exports.default = createPage;
// Please refer to apollo-client/core/networkRequest.d.ts for more info
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}
function isNetworkFetchingMore(networkStatus) {
    return networkStatus === 1;
}
// At the first request context might not be fetched. Get the feature flags before hand
function getFeatureFlags({ apolloClient }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, error } = yield apolloClient.query({ query: FeaturesQuery_1.default });
        return error ? [] : data.viewer.features;
    });
}
// If page requires feature flag, check for the flag.
function getInitialPropsWithFeature(requireFeature, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const featureFlags = yield getFeatureFlags(context);
        const shouldRedirect = (requireFeature.enabled &&
            !featureFlags.includes(requireFeature.enabled)) ||
            requireFeature.disabled ||
            featureFlags.includes(requireFeature.disabled);
        if (!shouldRedirect)
            return getInitialPageProps(context);
        const redirectPath = typeof requireFeature.redirectPath === "function"
            ? requireFeature.redirectPath(context.query)
            : requireFeature.redirectPath;
        const response = context.res;
        if (response) {
            // No Access Page
            response.writeHead(302, {
                Location: redirectPath,
            });
            response.end();
        }
        else {
            (0, browserRedirect_1.default)(redirectPath);
        }
        return {};
    });
}
function isNotFoundError(error) {
    return (error.graphQLErrors &&
        !!error.graphQLErrors.find(({ message }) => message === "RECORD_NOT_FOUND"));
}
function isAccessDeniedError(error) {
    return (error.graphQLErrors &&
        !!error.graphQLErrors.find(({ message }) => message === "ACCESS_DENIED"));
}
function getInitialPageProps(context) {
    return { params: context.query || {} };
}
