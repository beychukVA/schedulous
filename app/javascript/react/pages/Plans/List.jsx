"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NullPlanList_1 = __importDefault(require("./NullPlanList"));
const Edit_1 = __importDefault(require("~/icons/Edit"));
const Font_1 = __importDefault(require("~/components/Font"));
const currency_1 = require("~/utils/currency");
function PlanList({ plans, onClick }) {
    if (plans.length <= 0)
        return <NullPlanList_1.default />;
    return (<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan) => (<tr key={plan.id}>
            <td>{plan.name}</td>
            <td>
              <Font_1.default block={true} weight="bold">
                {(0, currency_1.formatCurrency)(plan.amount)}
              </Font_1.default>
              <Font_1.default color="gray-700">
                {" "}
                every {plan.interval !== 1 && plan.interval} {plan.intervalType}
                {plan.interval !== 1 && "s"}
              </Font_1.default>
            </td>
            <td>
              <a onClick={() => onClick(plan.id)}>
                <Edit_1.default />
              </a>
            </td>
          </tr>))}
      </tbody>
    </table>);
}
exports.default = PlanList;
