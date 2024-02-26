"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const paths_1 = __importDefault(require("~/paths"));
const SettingsLayout_1 = __importDefault(require("~/layouts/SettingsLayout"));
const BreadCrumbs_1 = __importDefault(require("~/components/BreadCrumbs"));
const Edit_1 = __importDefault(require("~/icons/Edit"));
const createPage_1 = __importDefault(require("~/utils/createPage"));
const Query_ts_1 = __importDefault(require("./Query.ts"));
const Team = ({ data }) => {
    const { teamMembers } = data;
    console.log(data);
    const breadCrumbData = [
        {
            title: "Settings",
            url: paths_1.default.settings.index(),
        },
        {
            title: "Team",
            url: "",
        },
    ];
    return (<SettingsLayout_1.default title={<BreadCrumbs_1.default data={breadCrumbData}></BreadCrumbs_1.default>} full={true}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((teamMember) => (<tr key={teamMember.id}>
              <td>{teamMember.user.person.name}</td>
              <td>{teamMember.role}</td>
              <td>
                <Edit_1.default />
              </td>
            </tr>))}
        </tbody>
      </table>
    </SettingsLayout_1.default>);
};
exports.default = (0, createPage_1.default)({
    title: "Team Members",
    query: Query_ts_1.default,
    component: Team,
});
