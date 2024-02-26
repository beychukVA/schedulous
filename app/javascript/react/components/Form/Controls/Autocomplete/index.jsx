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
const Font_1 = __importDefault(require("~/components/Font"));
const classnames_1 = __importDefault(require("classnames"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const MIN_LENGTH = 1;
function Autocomplete({ label, className, data, service, onChange, onSelect, lineItem, }) {
    const Component = lineItem ? lineItem : DefaultLineItem;
    const [results, setResults] = react_1.default.useState([]);
    const [currentValue, setCurrentValue] = react_1.default.useState("");
    const [active, setActive] = react_1.default.useState(false);
    const [currentResult, setCurrentResult] = react_1.default.useState(null);
    (0, react_1.useEffect)(() => {
        if (data) {
            setResults(data);
        }
    }, []);
    const clearResults = () => {
        setResults([]);
        setCurrentResult(null);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setCurrentValue(e.target.value);
        if (value === "") {
            if (onChange) {
                onChange(e);
            }
            clearResults();
            return;
        }
        if (service) {
            if (value.length >= 1) {
                service({ q: value }).then((serverResults) => {
                    setResults(serverResults);
                });
            }
        }
        else if (data) {
            setResults(data.filter((item) => item.title.includes(value)));
        }
        if (onChange) {
            onChange(e);
        }
    };
    const handleSelect = (newResult) => {
        setCurrentResult(newResult);
        if (onSelect) {
            onSelect(newResult);
            setCurrentValue(newResult.title);
        }
        clearResults();
        return;
    };
    return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.input, {
            [styles_module_scss_1.default.inputFilled]: currentValue && !active,
            [styles_module_scss_1.default.inputFocused]: active,
        })}>
      {label && (<Font_1.default component="label" className={styles_module_scss_1.default.label}>
          {label}
        </Font_1.default>)}
      <input className={(0, classnames_1.default)(className, styles_module_scss_1.default.control)} onChange={handleChange} type="text" value={currentValue} onFocus={() => setActive(true)} onBlur={() => setActive(false)}/>
      <div>
        {results.map((result) => (<Component key={result.id} result={result} currentResult={currentResult} onSelect={handleSelect}/>))}
      </div>
    </div>);
}
exports.default = Autocomplete;
const DefaultLineItem = ({ result, onSelect }) => {
    return (<div onClick={() => onSelect(result)} className={styles_module_scss_1.default.item}>
      <div className={styles_module_scss_1.default.itemContent}>
        <div className={styles_module_scss_1.default.itemTitle}>{result.title}</div>
        {result.subtitle && (<div className={styles_module_scss_1.default.itemSubtitle}>{result.subtitle}</div>)}
      </div>
    </div>);
};
