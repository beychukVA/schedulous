"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_router_1 = require("react-router");
const Container_1 = __importDefault(require("~/components/Container"));
const Button_1 = __importDefault(require("~/components/Button"));
const Authentication_1 = __importDefault(require("~/layouts/Authentication"));
const Form_1 = __importDefault(require("~/components/Form"));
const Mutation_1 = __importDefault(require("./Mutation"));
const paths_1 = __importDefault(require("~/paths"));
function ResetPassword() {
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const resetPasswordToken = searchParams.get('reset_password_token');
    const navigate = (0, react_router_1.useNavigate)();
    const handleSubmit = () => {
        navigate(paths_1.default.login());
    };
    return (<Authentication_1.default>
      <Container_1.default.Small>
        <Form_1.default.Mutation data-track="resetPassword" mutation={Mutation_1.default} onSubmit={handleSubmit} mutationInput={(values) => {
            return Object.assign(Object.assign({}, values), { resetPasswordToken: resetPasswordToken });
        }}>

          <Form_1.default.Input name="password" label="New Password" control={Form_1.default.Password}/>
          <Form_1.default.Input name="passwordConfirmation" label="Confirm Password" control={Form_1.default.Password}/>

          <Button_1.default type="submit" title="Reset Password"/>
        </Form_1.default.Mutation>
      </Container_1.default.Small>
    </Authentication_1.default>);
}
exports.default = ResetPassword;
