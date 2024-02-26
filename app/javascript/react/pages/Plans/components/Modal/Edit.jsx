"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PlanForm_1 = __importDefault(require("./PlanForm"));
const Modal_1 = __importDefault(require("~/components/Modal"));
const Query_1 = __importDefault(require("./Query"));
const createComponentWithQuery_1 = __importDefault(require("~/utils/createComponentWithQuery"));
function PlanNewModal({ planId, isOpen, onSubmit, onClose, }) {
    return (<Modal_1.default isOpen={isOpen} title="Plans" onClose={onClose}>
      <PlanFormWithQuery planId={planId} onSubmit={onSubmit}/>
    </Modal_1.default>);
}
exports.default = PlanNewModal;
function PlanFormWithQuery({ planId, onSubmit }) {
    return (0, createComponentWithQuery_1.default)({
        component: ({ plan }) => (<PlanForm_1.default planId={planId} initialValues={plan} onSubmit={onSubmit}/>),
        query: Query_1.default,
        queryVariables: { id: planId },
    });
}
