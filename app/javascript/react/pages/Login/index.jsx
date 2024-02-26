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
const react_apollo_1 = require("react-apollo");
const react_router_1 = require("react-router");
const Container_1 = __importDefault(require("~/components/Container"));
const Button_1 = __importDefault(require("~/components/Button"));
const Authentication_1 = __importDefault(require("~/layouts/Authentication"));
const Form_1 = __importDefault(require("~/components/Form"));
const paths_1 = __importDefault(require("~/paths"));
const Mutation_1 = __importDefault(require("./Mutation"));
const Autocomplete_1 = __importDefault(require("~/components/Form/Controls/Autocomplete"));
const Query_1 = __importDefault(require("./Query"));
let formObj;
const Login = ({ data }) => {
    const setFormObj = (f) => {
        formObj = f;
    };
    const navigate = (0, react_router_1.useNavigate)();
    const [isDisabledInputs, setIsDisabledInputs] = (0, react_1.useState)(true);
    const handleSubmit = (value, form) => {
        window.location.href = paths_1.default.dashboard();
    };
    const handleChange = (event) => __awaiter(void 0, void 0, void 0, function* () {
        data.refetch({ name: event.target.value });
        formObj.change("accountId", null);
    });
    const businesses = (data.accountsSearch || []).map((account) => {
        return {
            id: account.id,
            title: account.name,
        };
    });
    const handleSelectAccount = (newResult) => {
        formObj.change("accountId", newResult.id);
    };
    const onChangeFormInputs = (state) => {
        setIsDisabledInputs(!state.values.accountId);
    };
    return (<Authentication_1.default>
      <Container_1.default.Small>
        <Form_1.default.Mutation data-track="signup" mutation={Mutation_1.default} onSubmit={handleSubmit} setFormObj={setFormObj}>
          <Form_1.default.Spy onChange={onChangeFormInputs}/>

          <Autocomplete_1.default label="Business name" onChange={(newResult) => handleChange(newResult)} data={businesses} onSelect={handleSelectAccount}/>

          <Form_1.default.Input name="email" label="Email" control={Form_1.default.Email} disabled={isDisabledInputs}/>

          <Form_1.default.Input name="password" label="Password" control={Form_1.default.Password} disabled={isDisabledInputs}/>
           <div style={{ cursor: 'pointer' }}>
            <a onClick={() => { navigate(paths_1.default.forgotPassword()); }}>Forgot Password</a>
          </div>

          <Button_1.default type="submit" title="Log In"/>
        </Form_1.default.Mutation>
      </Container_1.default.Small>
    </Authentication_1.default>);
};
exports.default = (0, react_apollo_1.graphql)(Query_1.default)(Login);
