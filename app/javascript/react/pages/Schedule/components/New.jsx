"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProgramForm_1 = __importDefault(require("../components/ProgramForm"));
const state_1 = require("../state");
function NewSchedule({ onSubmit, currentTab }) {
    return (<ProgramForm_1.default program={state_1.initialProgram} handleSubmit={onSubmit} currentTab={currentTab}/>);
}
exports.default = NewSchedule;
