"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PlanForm_1 = __importDefault(require("./PlanForm"));
const Modal_1 = __importDefault(require("~/components/Modal"));
function PlanNewModal({ isOpen, onSubmit, onClose }) {
    return (<Modal_1.default isOpen={isOpen} title="Plans" onSubmit={onSubmit} onClose={onClose}>
      <PlanForm_1.default onSubmit={onSubmit}/>
    </Modal_1.default>);
}
exports.default = PlanNewModal;
