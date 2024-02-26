import React, { useState } from "react";
import { find, findIndex, uniqueId, compact } from "lodash";
import classNames from "classnames";
import moment from "moment";

import { Program } from "~/models/program";
import Form from "~/components/Form";
import Button from "~/components/Button";
import { initialProgramTimeslot } from "../state";
import TrashIcon from "~/icons/Trash";
import PROGRAM_CREATE_MUTATION from "./CreateMutation";
import PROGRAM_UPDATE_MUTATION from "./UpdateMutation";
import PROGRAM_QUERY from "~/pages/Schedule/Index/Query";

import styles from "./styles.module.scss";

let formObj;

interface IProps {
  handleSubmit?: any;
  currentTab?: string;
  program: Program;
}

export default function ProgramForm({
  handleSubmit,
  currentTab,
  program,
}: IProps) {
  const setFormObj = (f) => {
    formObj = f
  }

  const daynames = [
    { name: "monday", label: "MON" },
    { name: "tuesday", label: "TUES" },
    { name: "wednesday", label: "WED" },
    { name: "thursday", label: "THU" },
    { name: "friday", label: "FRI" },
    { name: "saturday", label: "SAT" },
    { name: "sunday", label: "SUN" },
  ];

  const programId = program.id

  const programFormInitialValues = {
    name: program.name,
    description: program.description,
    capacity: program.capacity,
    startDate: (program.startDate ? moment(program.startDate, "YYYY/MM/DD") : moment()).format("DD/MM/YYYY"),
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
        uniqueId: uniqueId(),
        _destroy: programTimeslot._destroy
      }
    }),
  }

  const [programState, setProgramState] = useState(programFormInitialValues)

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
    programState.programTimeslots.push(
      {...initialProgramTimeslot, uniqueId: uniqueId()}
    )
    setProgramState({...programState})
  };

  const removeProgramTimeslotsAttributes = (uniqueId) => {
    if (confirm("Are you sure you want to delete this schedule?")) {
      const index = findIndex(programState.programTimeslots, {
        uniqueId: uniqueId,
      });

      formObj.change(`programTimeslotsAttributes][${index}][_destroy]`, true)

      programState.programTimeslots[index]._destroy = true
      setProgramState({...programState})
    }
  };

  return (
    <Form.Mutation
      mutation={programId ? PROGRAM_UPDATE_MUTATION : PROGRAM_CREATE_MUTATION}
      mutationInput={(values) => {
        return {
          id: programId,
          programParams: values
        }
      }}
      data-track="program-form"
      onSubmit={handleSubmit}
      updateCache={(cache, { data }) => {
        const node = data?.response?.node;

        if (node) {
          const { viewer, programs } = cache.readQuery({ query: PROGRAM_QUERY });

          const program = find(programs, {
            id: node.id,
          });

          cache.writeQuery({
            query: PROGRAM_QUERY,
            data: {
              viewer,
              programs: compact([(program ? undefined : node), ...programs]),
            },
          });
        }
      }}
      setFormObj={setFormObj}
    >
      <div className={currentTab == "Class Details" ? "" : styles.hidden}>
        <Form.Input
          label="Class Name"
          defaultValue={programState.name}
          name="name"
          control={Form.Text}
        />

        <Form.Input
          label="Description"
          defaultValue={programState.description}
          name="description"
          control={Form.Textarea}
        />

        <div className={styles.flex}>
          <div className={styles.flexItem}>
            <Form.Input
              label="Capacity"
              defaultValue={programState.capacity}
              name="capacity"
              control={Form.Number}
            />
          </div>
          <div className={styles.flexItem}>
            <Form.Input
              label="Start Date"
              defaultValue={programState.startDate}
              name="startDate"
              control={Form.Text}
            />
          </div>
          <div className={styles.flexItem}>
            <Form.Input
              label="Class Duration"
              defaultValue={programState.duration}
              name="duration"
              control={Form.Number}
            />
          </div>
        </div>
      </div>

      <div className={currentTab == "Schedule" ? "" : styles.hidden}>
        {programState.programTimeslots.map((programTimeslot, index) => {
          const attrNamePrefix = `programTimeslotsAttributes[${index}]`;
          const attrPathPrefix = `programTimeslots[${index}].`;

          return (
            <div
              className={classNames(
                styles.timeslot,
                {
                  [`${styles.hidden}`]: programTimeslot._destroy
                }
              )}
              key={index}
            >
              <Form.Input
                name={`${attrNamePrefix}[id]`}
                defaultValue={programTimeslot.id}
                label={false}
                control={Form.Hidden}
              />

              <Form.Input
                name={`${attrNamePrefix}[_destroy]`}
                defaultValue={programTimeslot._destroy}
                label={false}
                control={Form.Hidden}
              />

              <div className={styles.daynameWrapper}>
                {daynames.map((dayname, daynameIndex) => {
                  return (
                    <Form.Input
                      key={daynameIndex}
                      defaultValue={programTimeslot[`${dayname.name}`]}
                      label={dayname.label}
                      name={`${attrNamePrefix}.${dayname.name}`}
                      path={`${attrPathPrefix}${dayname.name}`}
                      control={Form.Checkbox}
                    />
                  );
                })}
              </div>

              <div className={styles.hourWrapper}>
                <div className={styles.select}>
                  <Form.Input
                    label="Hour"
                    defaultValue={programTimeslot.hour}
                    name={`${attrNamePrefix}[hour]`}
                    path={`${attrPathPrefix}hour`}
                    control={Form.Select}
                    options={listHours}
                  />
                </div>

                <div className={styles.select}>
                  <Form.Input
                    label="Minute"
                    defaultValue={programTimeslot.minute}
                    name={`${attrNamePrefix}[minute]`}
                    path={`${attrPathPrefix}minute`}
                    control={Form.Select}
                    options={munites}
                  />
                </div>

                <div className={styles.select}>
                  <Form.Input
                    label="AM/PM"
                    defaultValue={programTimeslot.meridiem}
                    name={`${attrNamePrefix}[meridiem]`}
                    path={`${attrPathPrefix}meridiem`}
                    control={Form.Select}
                    options={[
                      { label: "PM", value: "pm" },
                      { label: "AM", value: "am" },
                    ]}
                  />
                </div>

                {programState.programTimeslots.length > 1 && (
                  <div
                    className={classNames(
                      styles.select,
                      styles.selectTrash
                    )}
                    onClick={() => {
                      removeProgramTimeslotsAttributes(
                        programTimeslot.uniqueId
                      );
                    }}
                  >
                    <TrashIcon />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className={styles.btnAddMoreWrapper}>
          <Button
            type="button"
            style="tertiary"
            size="small"
            onClick={() => {addProgramTimeslotsAttributes()}}
            title="Add Schedule"
          />
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          className={styles.btnSubmit}
          title="Submit"
          type="submit"
        />
      </div>
    </Form.Mutation>
  );
}
