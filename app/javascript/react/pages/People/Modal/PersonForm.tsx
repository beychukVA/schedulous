import React from "react";

// import Autocomplete, { IResult } from "~/components/Form/controls/Autocomplete";
import { autocompletePeople } from "~/api/people";
import PeopleLineItem from "./PeopleLineItem";
// import Error from "~/components/Form/Error";

export default function UserForm() {
  const [currentResult, setCurrentResult] = React.useState<IResult | null>(
    null
  );

  const handleSelect = (newResult: IResult, field) => {
    field.onChange(newResult.id);
    setCurrentResult(newResult);
  };

  return (
    <>
      {/* <Autocomplete
        label="Select person"
        service={autocompletePeople}
        lineItem={PeopleLineItem}
        onSelect={(newResult) => handleSelect(newResult, field)}
      /> */}
      <input type="hidden" value={currentResult?.id} />
    </>
  );
}
