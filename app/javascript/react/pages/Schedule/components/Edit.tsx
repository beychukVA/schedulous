import React from "react";

import ProgramForm from "../components/ProgramForm";
import createComponentWithQuery from "~/utils/createComponentWithQuery";
import PROGRAM_QUERY from "./Query";

export default function EditSchedule({ id, currentTab, onSubmit }) {
  return (
    <>
      {!!id && (
        createComponentWithQuery({
          component: ({ program }) => (
            <ProgramForm
              program={program}
              handleSubmit={onSubmit}
              currentTab={currentTab}
            />
          ),
          query: PROGRAM_QUERY,
          queryVariables: { id: id },
        })
      )}
    </>
  );
}
