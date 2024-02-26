"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
const Button_1 = __importDefault(require("~/components/Button"));
require("./styles.scss");
const classnames_1 = __importDefault(require("classnames"));
function MembershipForm({ handleSubmit, isVisibleConfirmMembership, today, membership, }) {
    const onFormSubmit = () => __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve("abc");
    });
    const [isEditingRecurrentPrice, setIsVisibleEditAndCheckedRecurrentPrice] = (0, react_1.useState)(false);
    const [isEditingPaymentPrice, setIsVisibleEditAndCheckedPaymentPrice] = (0, react_1.useState)(false);
    const [recurrentPrice, setRecurrentPrice] = (0, react_1.useState)("99.00");
    const [paymenPrice, setPaymenPrice] = (0, react_1.useState)("80.00");
    const characterWidth = 10;
    const [inputsWidth, setInputsWidth] = (0, react_1.useState)({
        membershipAmountInputWidth: characterWidth,
        recurrentPriceInputWidth: characterWidth,
    });
    const changeHandler = (key, evt) => {
        let newinputsWidth = Object.assign({}, inputsWidth);
        newinputsWidth[key] = characterWidth * evt.target.value.length;
        if (key == "recurrentPriceInputWidth") {
            setRecurrentPrice(evt.target.value);
        }
        else {
            setPaymenPrice(evt.target.value);
        }
        setInputsWidth(newinputsWidth);
    };
    const memberships = [
        { value: "gold", label: "Gold" },
        { value: "silver", label: "Silver" },
    ];
    const handleEditAndChecked = (key) => {
        if (key == "recurrentPrice") {
            if (isEditingRecurrentPrice) {
                setIsVisibleEditAndCheckedRecurrentPrice(false);
            }
            else {
                setIsVisibleEditAndCheckedRecurrentPrice(true);
            }
        }
        else {
            if (isEditingPaymentPrice) {
                setIsVisibleEditAndCheckedPaymentPrice(false);
            }
            else {
                setIsVisibleEditAndCheckedPaymentPrice(true);
            }
        }
    };
    return (<>
      <Form_1.default service={onFormSubmit} onSubmit={handleSubmit} formOptions={{
            defaultValues: {
                today: isVisibleConfirmMembership ? today : "",
                selectMembership: isVisibleConfirmMembership ? membership : "",
            },
        }}>
        <Form_1.default.Select label="Select Membership" name={"selectMembership"} path="" options={memberships}/>
        <Form_1.default.Input label="Today" name="today" path="dob"/>
        {isVisibleConfirmMembership && (<div className="membership-detail-wrapper">
            <p className="title">Membership Details</p>
            <div>
              <p className="content-label">Down Payment</p>
              <div className={isEditingPaymentPrice ? "hide-input" : "show-input"}>
                <p className="edit-icon" onClick={() => handleEditAndChecked("paymentPrice")}>
                  {isEditingPaymentPrice ? "CheckBox" : "Edit"}
                </p>
                {isEditingPaymentPrice ? (<>
                    <p>$</p>
                    <Form_1.default.Input className={(0, classnames_1.default)("class-input")} style={{
                    all: "unset",
                    textAlign: "right",
                    minWidth: "50px",
                    maxWidth: "150px",
                    width: inputsWidth.membershipAmountInputWidth,
                }} autoFocus onChange={(e) => changeHandler("membershipAmountInputWidth", e)} defaultValue={paymenPrice} type={"number"} name="downPaymentPrice" path="dob"/>
                  </>) : (<p className={"price-text"}>${paymenPrice}</p>)}
              </div>
            </div>
            <div>
              <p className="content-label">Recurring (Weekly)</p>
              <div className={isEditingRecurrentPrice ? "hide-input" : "show-input"}>
                <p className="edit-icon" onClick={() => handleEditAndChecked("recurrentPrice")}>
                  {isEditingRecurrentPrice ? "CheckBox" : "Edit"}
                </p>
                {isEditingRecurrentPrice ? (<>
                    <p>$</p>
                    <Form_1.default.Input className={(0, classnames_1.default)("class-input")} style={{
                    all: "unset",
                    textAlign: "right",
                    minWidth: "50px",
                    maxWidth: "150px",
                    width: inputsWidth.recurrentPriceInputWidth,
                }} autoFocus onChange={(e) => changeHandler("recurrentPriceInputWidth", e)} type={"number"} name="recurrentPrice" defaultValue={recurrentPrice} path="dob"/>
                  </>) : (<p className={"price-text"}>${recurrentPrice}</p>)}
              </div>
            </div>
            <div>
              <p className="content-label">Start</p>
              <p className="membership-date">{today}</p>
            </div>
          </div>)}
        <Button_1.default title="Create Membership" type="submit"/>
      </Form_1.default>
    </>);
}
exports.default = MembershipForm;
