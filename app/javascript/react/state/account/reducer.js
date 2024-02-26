"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentAccount = exports.accountReducer = void 0;
const actions_1 = require("./actions");
const accountReducer = (state, action) => {
    switch (action.type) {
        case actions_1.AccountActionTypes.SetAccount:
            return Object.assign(Object.assign({}, state), { account: action.payload });
        default:
            return state;
    }
};
exports.accountReducer = accountReducer;
const setCurrentAccount = (account) => ({
    type: actions_1.AccountActionTypes.SetAccount,
    payload: account,
});
exports.setCurrentAccount = setCurrentAccount;
