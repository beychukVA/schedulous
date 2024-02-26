"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useViewer_1 = __importDefault(require("~/hooks/useViewer"));
const createPage_1 = __importDefault(require("~/utils/createPage"));
const Admin_1 = __importDefault(require("../../layouts/Admin"));
const Dashboard = () => {
    const viewer = (0, useViewer_1.default)();
    return <Admin_1.default title="Dashboard">{JSON.stringify(viewer)}</Admin_1.default>;
};
exports.default = (0, createPage_1.default)({
    title: "Dashboard",
    query: null,
    component: Dashboard,
});
