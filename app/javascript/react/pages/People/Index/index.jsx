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
const Admin_1 = __importDefault(require("../../../layouts/Admin"));
const SubNavLink_1 = __importDefault(require("~/components/SubNav/SubNavLink"));
const Button_1 = __importDefault(require("~/components/Button"));
const Modal_1 = __importDefault(require("../Modal"));
const Font_1 = __importDefault(require("~/components/Font"));
const Avatar_1 = __importDefault(require("~/components/Avatar"));
const Container_1 = __importDefault(require("~/components/Container"));
const Edit_1 = __importDefault(require("~/icons/Edit"));
const More_1 = __importDefault(require("~/icons/More"));
const Box_1 = __importDefault(require("~/components/Box"));
const Flex_1 = __importDefault(require("~/components/Flex"));
const MembershipStatus_1 = __importDefault(require("~/components/MembershipStatus"));
const createPage_1 = __importDefault(require("~/utils/createPage"));
const Query_1 = __importDefault(require("./Query"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const People = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false);
    const { people } = data;
    return (<Admin_1.default title="People" subnav={<SubNav />} cta={<Button_1.default title="New Person" style="primary" onClick={() => setModalIsOpen(true)}/>}>
      <Modal_1.default isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
      <Container_1.default>
        <div className={styles_module_scss_1.default.people}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Join Date</th>
                <th>Membership</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (<tr key={person.id}>
                  <td>
                    <Avatar_1.default person={person} size={48}/>
                  </td>
                  <td>
                    <Font_1.default block={true} weight="bold" size="large">
                      {person.firstName} {person.lastName}
                    </Font_1.default>
                    <Font_1.default block={true} size="small" weight="regular">
                      {person.email}
                    </Font_1.default>
                  </td>
                  <td>
                    <Font_1.default size="large">June 5th, 2022</Font_1.default>
                  </td>
                  <td>
                    <Font_1.default size="large">MMA Weekly</Font_1.default>
                  </td>
                  <td>
                    <MembershipStatus_1.default status="Member"/>
                  </td>
                  <td>
                    <Flex_1.default.Row responsive={false}>
                      <Box_1.default>
                        <Edit_1.default />
                      </Box_1.default>
                      <Box_1.default ml="medium">
                        <More_1.default />
                      </Box_1.default>
                    </Flex_1.default.Row>
                  </td>
                </tr>))}
            </tbody>
          </table>
        </div>
      </Container_1.default>
    </Admin_1.default>);
};
const SubNav = () => {
    return (<>
      <Font_1.default block={true} size="xSmall" uppercase={true} weight="xBold" color="gray-600" mb="medium">
        Default Segments
      </Font_1.default>
      <SubNavLink_1.default title="Members" bubble={1200} to="/people/members"/>
      <SubNavLink_1.default title="Leads" bubble={300} to="/people/leads"/>
      <SubNavLink_1.default title="Slipping away" bubble={300} to="/people/slipping"/>
    </>);
};
exports.default = (0, createPage_1.default)({
    title: "People",
    query: Query_1.default,
    component: People,
});
