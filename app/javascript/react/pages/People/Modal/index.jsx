"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal_1 = __importDefault(require("~/components/Modal"));
const PeopleForm_1 = __importDefault(require("./PeopleForm"));
const MembershipForm_1 = __importDefault(require("./MembershipForm"));
function PeopleModal({ isOpen, setModalIsOpen }) {
    const [formState, setFormState] = react_1.default.useState("PEOPLE");
    const [subtitle, setSubtitle] = react_1.default.useState("");
    const [isVisibleConfirmMembership, setIsVisibleConfirmMembership] = react_1.default.useState(false);
    const [today, setToday] = react_1.default.useState("");
    const [membership, setMembership] = react_1.default.useState("");
    let title = "";
    if (formState == "PEOPLE") {
        title = "Create Person";
    }
    else {
        if (isVisibleConfirmMembership) {
            title = "Confirm Membership";
        }
        else {
            title = "Create Membership";
        }
    }
    const handleSubmit = (e) => {
        window.location.href = "/people";
        // if(formState == "PEOPLE") {
        //   if(e.person.name) {
        //     setSubtitle(e.person.name)
        //   }
        //   setFormState("MEMBERSHIP")
        // } else {
        //   if(!isVisibleConfirmMembership) {
        //     setIsVisibleConfirmMembership(true)
        //     setToday(e.today)
        //     setMembership(e.selectMembership)
        //   } else {
        //     setIsVisibleConfirmMembership(false)
        //     setFormState("PEOPLE")
        //     setSubtitle("")
        //     setModalIsOpen(false)
        //     setToday("")
        //     setMembership("")
        //   }
        // }
    };
    const onClose = () => {
        setModalIsOpen(false);
        setFormState("PEOPLE");
        setSubtitle("");
        setIsVisibleConfirmMembership(false);
    };
    return (<Modal_1.default isOpen={isOpen} onClose={onClose} title={title} subtitle={subtitle}>
      {formState == "PEOPLE" && <PeopleForm_1.default handleSubmit={handleSubmit}/>}
      {formState == "MEMBERSHIP" && (<MembershipForm_1.default handleSubmit={handleSubmit} isVisibleConfirmMembership={isVisibleConfirmMembership} today={today} membership={membership}/>)}
    </Modal_1.default>);
}
exports.default = PeopleModal;
