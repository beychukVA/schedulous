"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("~/components/Form"));
const Button_1 = __importDefault(require("~/components/Button"));
const Font_1 = __importDefault(require("~/components/Font"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const styles_module_scss_1 = __importDefault(require("../styles.module.scss"));
const CreateMutation_1 = __importDefault(require("./CreateMutation"));
const UpdateMutation_1 = __importDefault(require("./UpdateMutation"));
const Query_1 = __importDefault(require("~/pages/Plans/Query"));
const Box_1 = __importDefault(require("~/components/Box"));
const stripTypeName_1 = __importDefault(require("~/utils/stripTypeName"));
const INTERVAL_TYPES = [
    { label: "Days", value: "day" },
    { label: "Weeks", value: "week" },
    { label: "Months", value: "month" },
    { label: "Years", value: "year" },
];
function PlanForm({ planId, onSubmit, initialValues = {}, }) {
    return (<Form_1.default.Mutation mutation={planId ? UpdateMutation_1.default : CreateMutation_1.default} mutationInput={planId ? { planId: planId } : undefined} data-track="plan-form" onSubmit={onSubmit} updateCache={(cache, { data }) => {
            var _a;
            const node = (_a = data === null || data === void 0 ? void 0 : data.response) === null || _a === void 0 ? void 0 : _a.node;
            if (node) {
                const { viewer, plans } = cache.readQuery({ query: Query_1.default });
                cache.writeQuery({
                    query: Query_1.default,
                    data: {
                        viewer,
                        plans: [node, ...plans],
                    },
                });
            }
        }} initialValues={(0, stripTypeName_1.default)(initialValues)}>
      <Form_1.default.Input label="Name" name="name"/>
      {!planId && (<>
          <Form_1.default.Input label="Price" name="amount"/>

          <div className={styles_module_scss_1.default.interval}>
            <Font_1.default block={true} size="small" weight="bold" color="gray-500">
              Recurring every
            </Font_1.default>

            <div>
              <Form_1.default.Input noMargin={true} name="interval" label="Interval"/>
            </div>
            <Box_1.default ml="small">
              <Form_1.default.Input noMargin={true} name="intervalType" label="Interval Type" options={INTERVAL_TYPES}/>
            </Box_1.default>
          </div>
        </>)}
      <br />
      <Flex_1.default.Row justify="flex-end">
        <Button_1.default type="submit" title="Save Plan"/>
      </Flex_1.default.Row>
    </Form_1.default.Mutation>);
}
exports.default = PlanForm;
