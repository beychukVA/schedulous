import { Program, ProgramTimeslot } from "../../models/program";

export const initialProgramTimeslot: ProgramTimeslot = {
  monday: null,
  tuesday: null,
  wednesday: null,
  thursday: null,
  friday: null,
  saturday: null,
  sunday: null,
  hour: null,
  meridiem: null,
  minute: null,
  createdAt: null,
  updatedAt: null,
  accountId: null,
  programId: null,
  uniqueId: null,
};

export const initialProgram: Program = {
  accountId: null,
  capacity: null,
  description: null,
  image: null,
  name: null,
  duration: null,
  startDate: null,
  createdAt: null,
  updatedAt: null,
  programTimeslots: [initialProgramTimeslot]
};
