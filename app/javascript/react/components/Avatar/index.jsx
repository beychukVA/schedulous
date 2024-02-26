"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_lettered_avatar_1 = __importDefault(require("react-lettered-avatar"));
const colors_1 = __importDefault(require("~/utils/colors"));
function Avatar({ person, size = 36 }) {
    return person.has_user ? (<Avatar.UserLetteredAvatar name={person.name} size={size}/>) : (<Avatar.PersonLetteredAvatar name={person.name} size={size}/>);
}
exports.default = Avatar;
Avatar.PersonLetteredAvatar = ({ name, size }) => {
    const backgroundColor = "#d8e3f8";
    const color = colors_1.default.gray900;
    return (<react_lettered_avatar_1.default backgroundColor={backgroundColor} color={color} name={name} size={size}/>);
};
Avatar.UserLetteredAvatar = ({ name, size }) => {
    const backgroundColor = colors_1.default.primary200;
    const color = colors_1.default.gray900;
    return (<react_lettered_avatar_1.default backgroundColor={backgroundColor} color={color} name={name} size={size}/>);
};
