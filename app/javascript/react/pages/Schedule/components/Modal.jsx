"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal_1 = __importDefault(require("~/components/Modal"));
const Edit_1 = __importDefault(require("./Edit"));
const New_1 = __importDefault(require("./New"));
const NavToggle_1 = __importDefault(require("~/components/NavToggle"));
const TABS = ["Class Details", "Schedule"];
function PlansModal({ isOpen, setIsOpen, onClose, id }) {
    const handleSubmit = () => {
        setIsOpen(false);
    };
    const [currentTab, setCurrentTab] = react_1.default.useState(TABS[0]);
    return (<Modal_1.default isOpen={isOpen} onClose={onClose} title="Schedule" toggle={<NavToggle_1.default tabs={TABS} currentTab={currentTab} onChange={setCurrentTab}/>}>
      {id !== null ? (<Edit_1.default id={id} onSubmit={handleSubmit} currentTab={currentTab}/>) : (<New_1.default onSubmit={handleSubmit} currentTab={currentTab}/>)}
    </Modal_1.default>);
}
exports.default = PlansModal;
