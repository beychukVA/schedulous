import React, { useState } from "react";

import SettingsLayout from "~/layouts/SettingsLayout";
import EditIcon from "~/icons/Edit";
import MoreIcon from "~/icons/More";
import Box from "~/components/Box";
import Flex from "~/components/Flex";
import Button from "~/components/Button";
import BreadCrumb from "~/components/BreadCrumbs";
import ScheduleModal from "../components/Modal";
import createPage from "~/utils/createPage";
import PROGRAMS_QUERY from "./Query";

const breadCrumbData = [
  {
    title: "Class Schedule",
    url: "",
  },
];

const Schedules = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const showEditForm = (id) => {
    setSelectedSchedule(id);
    setIsOpen(true);
  };

  const showNewForm = () => {
    setSelectedSchedule(null);
    setIsOpen(true);
  };

  return (
    <>
      <ScheduleModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        id={selectedSchedule}
      />

      <SettingsLayout
        title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
        full={true}
        cta={
          <Button title="New Schedule" style="primary" onClick={showNewForm} />
        }
      >
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Frequency</th>
              <th>Instructor</th>
              <th>Capacity</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.programs.map((program) => (
              <tr key={program.id}>
                <td>{program.name}</td>
                <td>{program.frequency}</td>
                <td>
                  <p>Michael Landon</p>
                </td>
                <td>{program.capacity + " m"}</td>
                <td>{program.duration}</td>
                <td>
                  <Flex.Row responsive={false} justify="flex-start">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => showEditForm(program.id)}
                    >
                      <Box>
                        <EditIcon />
                      </Box>
                    </a>
                    <Box ml="medium">
                      <MoreIcon />
                    </Box>
                  </Flex.Row>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SettingsLayout>
    </>
  );
}

export default createPage({
  title: "Schedules",
  component: Schedules,
  query: PROGRAMS_QUERY,
});
