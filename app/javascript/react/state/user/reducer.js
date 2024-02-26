"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentUser = exports.userReducer = void 0;
const actions_1 = require("./actions");
const userReducer = (state, action) => {
    switch (action.type) {
        case actions_1.UserActionTypes.SetUser:
            return Object.assign(Object.assign({}, state), { user: action.payload });
        default:
            return state;
    }
};
exports.userReducer = userReducer;
const setCurrentUser = (user) => ({
    type: actions_1.UserActionTypes.SetUser,
    payload: user,
});
exports.setCurrentUser = setCurrentUser;
