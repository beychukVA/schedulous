import React, { useEffect, useState, useReducer } from "react";
import Admin from "../../../layouts/Admin";
import SubNavLink from "~/components/SubNav/SubNavLink";
import Button from "~/components/Button";
import PeopleModal from "../Modal";
import Font from "~/components/Font";
import Avatar from "~/components/Avatar";
import Container from "~/components/Container";
import EditIcon from "~/icons/Edit";
import MoreIcon from "~/icons/More";
import Box from "~/components/Box";
import Flex from "~/components/Flex";
import MembershipStatus from "~/components/MembershipStatus";
import createPage from "~/utils/createPage";
import PEOPLE_QUERY from "./Query";

import styles from "./styles.module.scss";

const People = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { people } = data;

  return (
    <Admin
      title="People"
      subnav={<SubNav />}
      cta={
        <Button
          title="New Person"
          style="primary"
          onClick={() => setModalIsOpen(true)}
        />
      }
    >
      <PeopleModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Container>
        <div className={styles.people}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Join Date</th>
                <th>Membership</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.id}>
                  <td>
                    <Avatar person={person} size={48} />
                  </td>
                  <td>
                    <Font block={true} weight="bold" size="large">
                      {person.firstName} {person.lastName}
                    </Font>
                    <Font block={true} size="small" weight="regular">
                      {person.email}
                    </Font>
                  </td>
                  <td>
                    <Font size="large">June 5th, 2022</Font>
                  </td>
                  <td>
                    <Font size="large">MMA Weekly</Font>
                  </td>
                  <td>
                    <MembershipStatus status="Member" />
                  </td>
                  <td>
                    <Flex.Row responsive={false}>
                      <Box>
                        <EditIcon />
                      </Box>
                      <Box ml="medium">
                        <MoreIcon />
                      </Box>
                    </Flex.Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Admin>
  );
};

const SubNav = () => {
  return (
    <>
      <Font
        block={true}
        size="xSmall"
        uppercase={true}
        weight="xBold"
        color="gray-600"
        mb="medium"
      >
        Default Segments
      </Font>
      <SubNavLink title="Members" bubble={1200} to="/people/members" />
      <SubNavLink title="Leads" bubble={300} to="/people/leads" />
      <SubNavLink title="Slipping away" bubble={300} to="/people/slipping" />
    </>
  );
};

export default createPage({
  title: "People",
  query: PEOPLE_QUERY,
  component: People,
});
