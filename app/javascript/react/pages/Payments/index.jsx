"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SettingsLayout_1 = __importDefault(require("~/layouts/SettingsLayout"));
const BreadCrumbs_1 = __importDefault(require("~/components/BreadCrumbs"));
const Container_1 = __importDefault(require("~/components/Container"));
const InputBlock_1 = __importDefault(require("~/components/InputBlock"));
const Stripe_1 = __importDefault(require("~/icons/logos/Stripe"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const Font_1 = __importDefault(require("~/components/Font"));
const Box_1 = __importDefault(require("~/components/Box"));
const useAccount_1 = __importDefault(require("~/hooks/useAccount"));
const Button_1 = __importDefault(require("~/components/Button"));
const createPage_1 = __importDefault(require("~/utils/createPage"));
const breadCrumbData = [
    {
        title: "Payment Provider",
        url: "",
    },
];
const PaymentProviders = () => {
    const currentAccount = (0, useAccount_1.default)();
    const handleClick = () => {
        window.location.href = "/stripe";
    };
    return (<SettingsLayout_1.default title={<BreadCrumbs_1.default data={breadCrumbData}></BreadCrumbs_1.default>}>
      <Container_1.default.XSmall>
        <InputBlock_1.default title="Payments" subtitle="Lorem ipsum dolor sit amet comnseca asdfa efraera a afadfasf">
          <Flex_1.default.Column align="flex-start">
            <Flex_1.default.Row align="flex-start" justify="flex-start">
              <Stripe_1.default />
              <Box_1.default ml="medium">
                <Flex_1.default.Column align="flex-start">
                  <Font_1.default component="h3" size="h5" weight="bold">
                    {currentAccount.hasStripe
            ? "Stripe Connected!"
            : "Connect Stripe"}
                  </Font_1.default>
                  <Font_1.default component="p" size="medium" color="gray-600">
                    Lorem ipsum dolor sit amet comnseca asdfa efraera a afadfasf
                  </Font_1.default>
                </Flex_1.default.Column>
              </Box_1.default>
            </Flex_1.default.Row>
            <Box_1.default mt="medium">
              {!currentAccount.hasStripe && (<Button_1.default onClick={handleClick} title="Connect" style="primary"/>)}
            </Box_1.default>
          </Flex_1.default.Column>
        </InputBlock_1.default>
      </Container_1.default.XSmall>
    </SettingsLayout_1.default>);
};
exports.default = (0, createPage_1.default)({
    title: "Payments",
    component: PaymentProviders,
    query: null,
});
