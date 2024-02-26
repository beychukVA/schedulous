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
const SettingsLayout_1 = __importDefault(require("~/layouts/SettingsLayout"));
const Edit_1 = __importDefault(require("~/icons/Edit"));
const More_1 = __importDefault(require("~/icons/More"));
const Box_1 = __importDefault(require("~/components/Box"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const Button_1 = __importDefault(require("~/components/Button"));
const BreadCrumbs_1 = __importDefault(require("~/components/BreadCrumbs"));
const Modal_1 = __importDefault(require("../components/Modal"));
const createPage_1 = __importDefault(require("~/utils/createPage"));
const Query_1 = __importDefault(require("./Query"));
const breadCrumbData = [
    {
        title: "Class Schedule",
        url: "",
    },
];
const Schedules = ({ data }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [selectedSchedule, setSelectedSchedule] = (0, react_1.useState)(null);
    const showEditForm = (id) => {
        setSelectedSchedule(id);
        setIsOpen(true);
    };
    const showNewForm = () => {
        setSelectedSchedule(null);
        setIsOpen(true);
    };
    return (<>
      <Modal_1.default isOpen={isOpen} setIsOpen={setIsOpen} onClose={() => setIsOpen(false)} id={selectedSchedule}/>

      <SettingsLayout_1.default title={<BreadCrumbs_1.default data={breadCrumbData}></BreadCrumbs_1.default>} full={true} cta={<Button_1.default title="New Schedule" style="primary" onClick={showNewForm}/>}>
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Frequency</th>
              <th>Instructor</th>
              <th>Capacity</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.programs.map((program) => (<tr key={program.id}>
                <td>{program.name}</td>
                <td>{program.frequency}</td>
                <td>
                  <p>Michael Landon</p>
                </td>
                <td>{program.capacity + " m"}</td>
                <td>{program.duration}</td>
                <td>
                  <Flex_1.default.Row responsive={false} justify="flex-start">
                    <a style={{ cursor: "pointer" }} onClick={() => showEditForm(program.id)}>
                      <Box_1.default>
                        <Edit_1.default />
                      </Box_1.default>
                    </a>
                    <Box_1.default ml="medium">
                      <More_1.default />
                    </Box_1.default>
                  </Flex_1.default.Row>
                </td>
              </tr>))}
          </tbody>
        </table>
      </SettingsLayout_1.default>
    </>);
};
exports.default = (0, createPage_1.default)({
    title: "Schedules",
    component: Schedules,
    query: Query_1.default,
});
