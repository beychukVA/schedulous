"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialProgram = exports.initialProgramTimeslot = void 0;
exports.initialProgramTimeslot = {
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
exports.initialProgram = {
    accountId: null,
    capacity: null,
    description: null,
    image: null,
    name: null,
    duration: null,
    startDate: null,
    createdAt: null,
    updatedAt: null,
    programTimeslots: [exports.initialProgramTimeslot]
};
