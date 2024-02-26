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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_final_form_1 = require("react-final-form");
const react_apollo_1 = require("react-apollo");
const final_form_1 = require("final-form");
const final_form_arrays_1 = __importDefault(require("final-form-arrays"));
const captureError_1 = __importDefault(require("~/utils/captureError"));
const config_1 = require("~/config");
const MUTATORS = Object.assign({}, final_form_arrays_1.default);
function Mutation({ children, className, "data-track": dataTrack, style, mutation, mutationInput, updateCache, initialValues, onSubmit, id, setFormObj, }) {
    const formRef = React.useRef(null);
    return (<react_apollo_1.Mutation mutation={mutation} update={updateCache}>
      {(mutate) => {
            const submit = (values, ..._rest) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data } = yield mutate({
                        variables: {
                            input: Object.assign({}, buildInput(values, mutationInput)),
                        },
                    });
                    const response = data && data[Object.keys(data)[0]];
                    if (response.errors && response.errors.length > 0) {
                        const normalized = response.errors.reduce(normalizeErrors, {});
                        console.log(normalized);
                        return normalized;
                    }
                    if (onSubmit) {
                        onSubmit(response.node, values);
                    }
                }
                catch (e) {
                    if (config_1.environment.isProduction) {
                        (0, captureError_1.default)(e);
                    }
                    else {
                        console.error(e); // tslint:disable-line
                    }
                    return {
                        [final_form_1.FORM_ERROR]: "Server error",
                    };
                }
            });
            return (<react_final_form_1.Form onSubmit={submit} initialValues={initialValues || {}} mutators={MUTATORS}>
            {({ handleSubmit, values, form }) => {
                    setFormObj && setFormObj(form);
                    return (<form id={id} ref={formRef} onSubmit={handleSubmit} className={className} style={style} autoComplete="off">
                  {children}
                </form>);
                }}
          </react_final_form_1.Form>);
        }}
    </react_apollo_1.Mutation>);
}
exports.default = Mutation;
function buildInput(input, mutationInput) {
    if (typeof mutationInput === "function") {
        return mutationInput(input);
    }
    if (mutationInput) {
        return Object.assign(Object.assign({}, mutationInput), input);
    }
    return input;
}
function normalizeErrors(acc, error) {
    acc[error.field === "base" ? final_form_1.FORM_ERROR : error.field] = error.message;
    return acc;
}
