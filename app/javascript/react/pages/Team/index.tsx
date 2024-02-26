import React from "react";
import paths from "~/paths";
import SettingsLayout from "~/layouts/SettingsLayout";
import BreadCrumb from "~/components/BreadCrumbs";
import EditIcon from "~/icons/Edit";
import createPage from "~/utils/createPage";
import TEAM_MEMBER_QUERY from "./Query.ts";

const Team = ({ data }) => {
  const { teamMembers } = data;
  console.log(data);
  const breadCrumbData = [
    {
      title: "Settings",
      url: paths.settings.index(),
    },
    {
      title: "Team",
      url: "",
    },
  ];

  return (
    <SettingsLayout
      title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
      full={true}
    >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((teamMember) => (
            <tr key={teamMember.id}>
              <td>{teamMember.user.person.name}</td>
              <td>{teamMember.role}</td>
              <td>
                <EditIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SettingsLayout>
  );
};

export default createPage({
  title: "Team Members",
  query: TEAM_MEMBER_QUERY,
  component: Team,
});
