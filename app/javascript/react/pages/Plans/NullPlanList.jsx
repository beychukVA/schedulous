"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container_1 = __importDefault(require("~/components/Container"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const Font_1 = __importDefault(require("~/components/Font"));
const Box_1 = __importDefault(require("~/components/Box"));
const Button_1 = __importDefault(require("~/components/Button"));
const react_router_1 = require("react-router");
const paths_1 = __importDefault(require("~/paths"));
function NullPlanList() {
    const navigate = (0, react_router_1.useNavigate)();
    const handleClick = () => {
        navigate(paths_1.default.settings.plans.new());
    };
    return (<Container_1.default.XSmall>
      <Flex_1.default.Column responsive={false} align="flex-start">
        <Flex_1.default.Row responsive={false} align="flex-start" justify="flex-start">
          <Box_1.default>
            <Flex_1.default.Column responsive={false} align="flex-start">
              <Font_1.default component="h3" size="h5" weight="bold">
                No Plans Yet
              </Font_1.default>
              <Font_1.default component="p" size="medium" color="gray-600">
                Looks like you don't have any plans set up let's get started!
              </Font_1.default>
            </Flex_1.default.Column>
          </Box_1.default>
        </Flex_1.default.Row>
        <Box_1.default mt="medium">
          <Button_1.default onClick={handleClick} title="Create your first plan" style="primary"/>
        </Box_1.default>
      </Flex_1.default.Column>
    </Container_1.default.XSmall>);
}
exports.default = NullPlanList;
