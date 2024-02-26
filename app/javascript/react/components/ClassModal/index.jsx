"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal_1 = __importDefault(require("~/components/Modal"));
const EventTemplate_1 = __importDefault(require("./EventTemplate"));
function ClassModal({ isOpen, setModalIsOpen, title, subtitle, favorite, data, }) {
    const handleSubmit = (e) => { };
    const onClose = () => {
        setModalIsOpen(false);
    };
    return (<Modal_1.default isOpen={isOpen} onClose={onClose} title={title} subtitle={subtitle} favorite={favorite}>
      <EventTemplate_1.default data={data}/>
    </Modal_1.default>);
}
exports.default = ClassModal;
