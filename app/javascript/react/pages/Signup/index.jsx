"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container_1 = __importDefault(require("~/components/Container"));
const Button_1 = __importDefault(require("~/components/Button"));
const Authentication_1 = __importDefault(require("~/layouts/Authentication"));
const Form_1 = __importDefault(require("~/components/Form"));
const paths_1 = __importDefault(require("~/paths"));
const Mutation_1 = __importDefault(require("./Mutation"));
function Signup() {
    const handleSubmit = () => {
        window.location.href = paths_1.default.dashboard();
    };
    console.log(Mutation_1.default);
    return (<Authentication_1.default>
      <Container_1.default.Small>
        <Form_1.default.Mutation data-track="signup" mutation={Mutation_1.default} onSubmit={handleSubmit}>
          <Form_1.default.Input name="accountName" label="Business Name"/>
          <Form_1.default.Input name="name" label="Your Name"/>
          <Form_1.default.Input name="email" label="Your Best Email" control={Form_1.default.Email}/>
          <Form_1.default.Input name="password" label="Password" control={Form_1.default.Password}/>
          <Button_1.default type="submit" title="Sign Up"/>
        </Form_1.default.Mutation>
      </Container_1.default.Small>
    </Authentication_1.default>);
}
exports.default = Signup;
