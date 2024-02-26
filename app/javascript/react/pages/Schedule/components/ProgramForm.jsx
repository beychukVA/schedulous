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
const lodash_1 = require("lodash");
const classnames_1 = __importDefault(require("classnames"));
const moment_1 = __importDefault(require("moment"));
const Form_1 = __importDefault(require("~/components/Form"));
const Button_1 = __importDefault(require("~/components/Button"));
const state_1 = require("../state");
const Trash_1 = __importDefault(require("~/icons/Trash"));
const CreateMutation_1 = __importDefault(require("./CreateMutation"));
const UpdateMutation_1 = __importDefault(require("./UpdateMutation"));
const Query_1 = __importDefault(require("~/pages/Schedule/Index/Query"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
let formObj;
function ProgramForm({ handleSubmit, currentTab, program, }) {
    const setFormObj = (f) => {
        formObj = f;
    };
    const daynames = [
        { name: "monday", label: "MON" },
        { name: "tuesday", label: "TUES" },
        { name: "wednesday", label: "WED" },
        { name: "thursday", label: "THU" },
        { name: "friday", label: "FRI" },
        { name: "saturday", label: "SAT" },
        { name: "sunday", label: "SUN" },
    ];
    const programId = program.id;
    const programFormInitialValues = {
        name: program.name,
        description: program.description,
        capacity: program.capacity,
        startDate: (program.startDate ? (0, moment_1.default)(program.startDate, "YYYY/MM/DD") : (0, moment_1.default)()).format("DD/MM/YYYY"),
        duration: program.duration,
        programTimeslots: (program.programTimeslots || []).map((programTimeslot) => {
            return {
                id: programTimeslot.id,
                monday: programTimeslot.monday,
                tuesday: programTimeslot.tuesday,
                wednesday: programTimeslot.wednesday,
                thursday: programTimeslot.thursday,
                friday: programTimeslot.friday,
                saturday: programTimeslot.saturday,
                sunday: programTimeslot.sunday,
                hour: programTimeslot.hour,
                meridiem: programTimeslot.meridiem,
                minute: programTimeslot.minute,
                uniqueId: (0, lodash_1.uniqueId)(),
                _destroy: programTimeslot._destroy
            };
        }),
    };
    const [programState, setProgramState] = (0, react_1.useState)(programFormInitialValues);
    const range = (start, end) => {
        let nums = [];
        for (let i = start; i < end; i++)
            nums.push({
                label: i < 10 ? "0" + i.toString() : i.toString(),
                value: i.toString(),
            });
        return nums;
    };
    const munites = range(0, 60);
    const listHours = range(1, 13);
    const addProgramTimeslotsAttributes = () => {
        programState.programTimeslots.push(Object.assign(Object.assign({}, state_1.initialProgramTimeslot), { uniqueId: (0, lodash_1.uniqueId)() }));
        setProgramState(Object.assign({}, programState));
    };
    const removeProgramTimeslotsAttributes = (uniqueId) => {
        if (confirm("Are you sure you want to delete this schedule?")) {
            const index = (0, lodash_1.findIndex)(programState.programTimeslots, {
                uniqueId: uniqueId,
            });
            formObj.change(`programTimeslotsAttributes][${index}][_destroy]`, true);
            programState.programTimeslots[index]._destroy = true;
            setProgramState(Object.assign({}, programState));
        }
    };
    return (<Form_1.default.Mutation mutation={programId ? UpdateMutation_1.default : CreateMutation_1.default} mutationInput={(values) => {
            return {
                id: programId,
                programParams: values
            };
        }} data-track="program-form" onSubmit={handleSubmit} updateCache={(cache, { data }) => {
            var _a;
            const node = (_a = data === null || data === void 0 ? void 0 : data.response) === null || _a === void 0 ? void 0 : _a.node;
            if (node) {
                const { viewer, programs } = cache.readQuery({ query: Query_1.default });
                const program = (0, lodash_1.find)(programs, {
                    id: node.id,
                });
                cache.writeQuery({
                    query: Query_1.default,
                    data: {
                        viewer,
                        programs: (0, lodash_1.compact)([(program ? undefined : node), ...programs]),
                    },
                });
            }
        }} setFormObj={setFormObj}>
      <div className={currentTab == "Class Details" ? "" : styles_module_scss_1.default.hidden}>
        <Form_1.default.Input label="Class Name" defaultValue={programState.name} name="name" control={Form_1.default.Text}/>

        <Form_1.default.Input label="Description" defaultValue={programState.description} name="description" control={Form_1.default.Textarea}/>

        <div className={styles_module_scss_1.default.flex}>
          <div className={styles_module_scss_1.default.flexItem}>
            <Form_1.default.Input label="Capacity" defaultValue={programState.capacity} name="capacity" control={Form_1.default.Number}/>
          </div>
          <div className={styles_module_scss_1.default.flexItem}>
            <Form_1.default.Input label="Start Date" defaultValue={programState.startDate} name="startDate" control={Form_1.default.Text}/>
          </div>
          <div className={styles_module_scss_1.default.flexItem}>
            <Form_1.default.Input label="Class Duration" defaultValue={programState.duration} name="duration" control={Form_1.default.Number}/>
          </div>
        </div>
      </div>

      <div className={currentTab == "Schedule" ? "" : styles_module_scss_1.default.hidden}>
        {programState.programTimeslots.map((programTimeslot, index) => {
            const attrNamePrefix = `programTimeslotsAttributes[${index}]`;
            const attrPathPrefix = `programTimeslots[${index}].`;
            return (<div className={(0, classnames_1.default)(styles_module_scss_1.default.timeslot, {
                    [`${styles_module_scss_1.default.hidden}`]: programTimeslot._destroy
                })} key={index}>
              <Form_1.default.Input name={`${attrNamePrefix}[id]`} defaultValue={programTimeslot.id} label={false} control={Form_1.default.Hidden}/>

              <Form_1.default.Input name={`${attrNamePrefix}[_destroy]`} defaultValue={programTimeslot._destroy} label={false} control={Form_1.default.Hidden}/>

              <div className={styles_module_scss_1.default.daynameWrapper}>
                {daynames.map((dayname, daynameIndex) => {
                    return (<Form_1.default.Input key={daynameIndex} defaultValue={programTimeslot[`${dayname.name}`]} label={dayname.label} name={`${attrNamePrefix}.${dayname.name}`} path={`${attrPathPrefix}${dayname.name}`} control={Form_1.default.Checkbox}/>);
                })}
              </div>

              <div className={styles_module_scss_1.default.hourWrapper}>
                <div className={styles_module_scss_1.default.select}>
                  <Form_1.default.Input label="Hour" defaultValue={programTimeslot.hour} name={`${attrNamePrefix}[hour]`} path={`${attrPathPrefix}hour`} control={Form_1.default.Select} options={listHours}/>
                </div>

                <div className={styles_module_scss_1.default.select}>
                  <Form_1.default.Input label="Minute" defaultValue={programTimeslot.minute} name={`${attrNamePrefix}[minute]`} path={`${attrPathPrefix}minute`} control={Form_1.default.Select} options={munites}/>
                </div>

                <div className={styles_module_scss_1.default.select}>
                  <Form_1.default.Input label="AM/PM" defaultValue={programTimeslot.meridiem} name={`${attrNamePrefix}[meridiem]`} path={`${attrPathPrefix}meridiem`} control={Form_1.default.Select} options={[
                    { label: "PM", value: "pm" },
                    { label: "AM", value: "am" },
                ]}/>
                </div>

                {programState.programTimeslots.length > 1 && (<div className={(0, classnames_1.default)(styles_module_scss_1.default.select, styles_module_scss_1.default.selectTrash)} onClick={() => {
                        removeProgramTimeslotsAttributes(programTimeslot.uniqueId);
                    }}>
                    <Trash_1.default />
                  </div>)}
              </div>
            </div>);
        })}
        <div className={styles_module_scss_1.default.btnAddMoreWrapper}>
          <Button_1.default type="button" style="tertiary" size="small" onClick={() => { addProgramTimeslotsAttributes(); }} title="Add Schedule"/>
        </div>
      </div>

      <div className={styles_module_scss_1.default.buttonWrapper}>
        <Button_1.default className={styles_module_scss_1.default.btnSubmit} title="Submit" type="submit"/>
      </div>
    </Form_1.default.Mutation>);
}
exports.default = ProgramForm;
