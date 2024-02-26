"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstFragmentName = void 0;
const react_apollo_1 = require("react-apollo");
function useGraphQLFragment(fragment, ...keys) {
    try {
        const client = (0, react_apollo_1.useApolloClient)();
        return client.readFragment({
            fragment,
            id: keys.join(""),
            fragmentName: firstFragmentName(fragment),
        });
    }
    catch (_err) {
        return null;
    }
}
exports.default = useGraphQLFragment;
function firstFragmentName(fragment) {
    return fragment.definitions[0].name.value || undefined;
}
exports.firstFragmentName = firstFragmentName;
