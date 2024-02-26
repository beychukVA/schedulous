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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_1 = require("react-router");
const Container_1 = __importDefault(require("~/components/Container"));
const Button_1 = __importDefault(require("~/components/Button"));
const Authentication_1 = __importDefault(require("~/layouts/Authentication"));
const Form_1 = __importDefault(require("~/components/Form"));
const Mutation_1 = __importDefault(require("./Mutation"));
const paths_1 = __importDefault(require("~/paths"));
let formObj;
function AccountConfirmation() {
    const navigate = (0, react_router_1.useNavigate)();
    const [isConfirmSuccess, setIsConfirmSucess] = (0, react_1.useState)(false);
    const setFormObj = (f) => {
        formObj = f;
    };
    const handleSubmit = () => {
        setIsConfirmSucess(true);
    };
    return (<Authentication_1.default>
      <Container_1.default.Small>
        {!isConfirmSuccess ?
            <Form_1.default.Mutation data-track="accountConfirmation" mutation={Mutation_1.default} onSubmit={handleSubmit} setFormObj={setFormObj}>
            <Form_1.default.Input name="email" label="Email" control={Form_1.default.Email}/>

            <Button_1.default type="submit" title="Account Confirmation"/>
          </Form_1.default.Mutation>
            : <a>Confirmation URL Sent To Your Email</a>}
        <div style={{ cursor: 'pointer' }}>
          <a onClick={() => { navigate(paths_1.default.login()); }}>Back To Login</a>
        </div>
      </Container_1.default.Small>
    </Authentication_1.default>);
}
exports.default = AccountConfirmation;
