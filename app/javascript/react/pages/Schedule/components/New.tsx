import React from "react";

import ProgramForm from "../components/ProgramForm";
import { initialProgram } from "../state";

export default function NewSchedule({ onSubmit, currentTab }) {
  return (
    <ProgramForm
      program={initialProgram}
      handleSubmit={onSubmit}
      currentTab={currentTab}
    />
  );
}
