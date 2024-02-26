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
const Admin_1 = __importDefault(require("~/layouts/Admin"));
const SubNavLink_1 = __importDefault(require("~/components/SubNav/SubNavLink"));
const Font_1 = __importDefault(require("~/components/Font"));
const Button_1 = __importDefault(require("~/components/Button"));
const InboxSearch_1 = __importDefault(require("~/components/InboxSearch"));
const InboxChat_1 = __importDefault(require("~/components/InboxChat"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const ClassModal_1 = __importDefault(require("~/components/ClassModal"));
const InboxMenu_1 = __importDefault(require("~/components/InboxMenu"));
const contacts = [
    {
        id: 1,
        name: "Jamie Smith",
        email: "jamiesmith@gmail.com",
        favorite: true,
    },
    {
        id: 2,
        name: "Megan Low",
        email: "jamiesmith@gmail.com",
        favorite: false,
    },
    {
        id: 3,
        name: "Rebecca Jones",
        email: "jamiesmith@gmail.com",
        favorite: false,
    },
    {
        id: 4,
        name: "Allen Park",
        email: "jamiesmith@gmail.com",
        favorite: true,
    },
    {
        id: 5,
        name: "Peter Olsen",
        email: "jamiesmith@gmail.com",
        favorite: false,
    },
    {
        id: 6,
        name: "Sara Connor",
        email: "jamiesmith@gmail.com",
        favorite: false,
    },
    {
        id: 7,
        name: "Lisa Lee",
        email: "jamiesmith@gmail.com",
        favorite: false,
    },
    {
        id: 8,
        name: "Jamie Smith",
        email: "jamiesmith@gmail.com",
        favorite: false,
    },
];
function Inbox() {
    const [collapsed, setCollapsed] = (0, react_1.useState)(false);
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false);
    const [title, setTitle] = (0, react_1.useState)("New message");
    const [subtitle, setSubtitle] = (0, react_1.useState)("Create new message");
    const [favorite, setFavorite] = (0, react_1.useState)(false);
    const [dataModal, setDataModal] = (0, react_1.useState)({
        profile: { name: "", email: "" },
        history: [],
        contacts: [],
    });
    const onChangeCollapsed = () => setCollapsed(!collapsed);
    const handleModalOpen = ({ isOpen, data }) => {
        const { event, history, profile } = data;
        setTitle(event.title);
        setSubtitle(event.subTitle);
        setFavorite(event.favorite);
        setDataModal({
            profile: profile,
            history: history,
            contacts: contacts,
        });
        setModalIsOpen(isOpen);
    };
    return (<Admin_1.default title="Message" subnav={<SubNav />} cta={<Button_1.default title="New Message" style="primary"/>}>
      <ClassModal_1.default favorite={favorite} data={dataModal} isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} title={title} subtitle={subtitle}/>
      <div className={styles_module_scss_1.default.container}>
        <InboxSearch_1.default />
        <div className={styles_module_scss_1.default.wrapper}>
          <InboxChat_1.default collapsed={collapsed} onChangeCollapsed={onChangeCollapsed}/>
          <InboxMenu_1.default openModal={handleModalOpen} collapsed={collapsed} onChangeCollapsed={onChangeCollapsed}/>
        </div>
      </div>
    </Admin_1.default>);
}
exports.default = Inbox;
const SubNav = () => {
    return (<>
      <Font_1.default block={true} size="xSmall" uppercase={true} weight="xBold" color="gray-600" mb="medium">
        Default Segments
      </Font_1.default>
      <SubNavLink_1.default title="All" bubble={14} selected={true} to="/inbox"/>
      <SubNavLink_1.default title="Unread" bubble={5} to="/inbox/unread"/>
      <SubNavLink_1.default title="Starred" bubble={16} to="/inbox/starred"/>
      <SubNavLink_1.default title="Sent" bubble={5} to="/inbox/sent"/>
    </>);
};
