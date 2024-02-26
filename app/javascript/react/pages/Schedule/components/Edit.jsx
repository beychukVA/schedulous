"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProgramForm_1 = __importDefault(require("../components/ProgramForm"));
const createComponentWithQuery_1 = __importDefault(require("~/utils/createComponentWithQuery"));
const Query_1 = __importDefault(require("./Query"));
function EditSchedule({ id, currentTab, onSubmit }) {
    return (<>
      {!!id && ((0, createComponentWithQuery_1.default)({
            component: ({ program }) => (<ProgramForm_1.default program={program} handleSubmit={onSubmit} currentTab={currentTab}/>),
            query: Query_1.default,
            queryVariables: { id: id },
        }))}
    </>);
}
exports.default = EditSchedule;
