"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const Font_1 = __importDefault(require("~/components/Font"));
const HistoryCard_1 = __importDefault(require("./HistoryCard/HistoryCard"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function History({ historys, scroll = false }) {
    return (<div className={styles_module_scss_1.default.container}>
      <div className={styles_module_scss_1.default.title_container}>
        <Font_1.default block={false} size="xSmall" weight="xBold" color="gray" mb="none" mt="none">
          PAST HISTORY
        </Font_1.default>
        <Font_1.default block={false} size="xSmall" weight="xBold" color="gray" mb="none" mt="none">
          STATUS
        </Font_1.default>
      </div>
      <hr />
      <ul className={(0, classnames_1.default)(styles_module_scss_1.default.content_container, {
            [styles_module_scss_1.default.scroll]: scroll,
        })}>
        {historys &&
            historys.map(({ id, title, subTitle, status, color }) => (<HistoryCard_1.default key={id} title={title} subTitle={subTitle} status={status} color={color}/>))}
      </ul>
    </div>);
}
exports.default = History;
