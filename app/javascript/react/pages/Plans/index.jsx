"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SettingsLayout_1 = __importDefault(require("~/layouts/SettingsLayout"));
const Button_1 = __importDefault(require("~/components/Button"));
const BreadCrumbs_1 = __importDefault(require("~/components/BreadCrumbs"));
const useAccount_1 = __importDefault(require("~/hooks/useAccount"));
const List_1 = __importDefault(require("./List"));
const Edit_1 = __importDefault(require("./components/Modal/Edit"));
const New_1 = __importDefault(require("./components/Modal/New"));
const createPage_1 = __importDefault(require("~/utils/createPage"));
const Query_1 = __importDefault(require("./Query"));
const breadCrumbData = [
    {
        title: "Plans",
        url: "",
    },
];
const Plans = ({ data }) => {
    const { plans } = data;
    const currentAccount = (0, useAccount_1.default)();
    const [isEditing, setIsEditing] = react_1.default.useState(false);
    const [isCreating, setIsCreating] = react_1.default.useState(false);
    const [selectedPlan, setSelectedPlan] = react_1.default.useState(null);
    const showEditForm = (id) => {
        setSelectedPlan(id);
        setIsEditing(true);
    };
    const showNewForm = () => {
        setSelectedPlan(null);
        setIsCreating(true);
    };
    return (<>
      {selectedPlan && (<Edit_1.default isOpen={isEditing} onSubmit={() => setIsEditing(false)} planId={selectedPlan} onClose={() => setIsEditing(false)}/>)}
      <New_1.default isOpen={isCreating} onSubmit={() => setIsCreating(false)} onClose={() => setIsCreating(false)}/>

      <SettingsLayout_1.default title={<BreadCrumbs_1.default data={breadCrumbData}></BreadCrumbs_1.default>} full={true} cta={<Button_1.default title="New Plan" style="primary" onClick={showNewForm}/>}>
        {currentAccount.hasStripe ? (<List_1.default plans={plans} onClick={showEditForm}/>) : (<div>No Stripe</div>)}
      </SettingsLayout_1.default>
    </>);
};
exports.default = (0, createPage_1.default)({
    title: "Plans",
    component: Plans,
    query: Query_1.default,
});
