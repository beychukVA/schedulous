import React, { useEffect, useState, useReducer } from "react";
import Admin from "~/layouts/Admin";
import SubNavLink from "~/components/SubNav/SubNavLink";
import Font from "~/components/Font";
import Button from "~/components/Button";
import Search from "~/components/InboxSearch";
import Chat from "~/components/InboxChat";
import styles from "./styles.module.scss";
import AppointmentModal from "~/components/AppointmentModal";
import ClassModal from "~/components/ClassModal";
import InboxMenu from "~/components/InboxMenu";
import { Response } from "../../components/AppointmentModal/types/Response";
import IModalData from "~/components/AppointmentModal/types/Data";
import { IContact } from "~/components/ClassModal/EventTemplate/CheckInTemplate/ContactCard/types/Contact";

const contacts: IContact[] = [
  {
    id: 1,
    name: "Jamie Smith",
    email: "jamiesmith@gmail.com",
    favorite: true,
  },
  {
    id: 2,
    name: "Megan Low",
    email: "jamiesmith@gmail.com",
    favorite: false,
  },
  {
    id: 3,
    name: "Rebecca Jones",
    email: "jamiesmith@gmail.com",
    favorite: false,
  },
  {
    id: 4,
    name: "Allen Park",
    email: "jamiesmith@gmail.com",
    favorite: true,
  },
  {
    id: 5,
    name: "Peter Olsen",
    email: "jamiesmith@gmail.com",
    favorite: false,
  },
  {
    id: 6,
    name: "Sara Connor",
    email: "jamiesmith@gmail.com",
    favorite: false,
  },
  {
    id: 7,
    name: "Lisa Lee",
    email: "jamiesmith@gmail.com",
    favorite: false,
  },
  {
    id: 8,
    name: "Jamie Smith",
    email: "jamiesmith@gmail.com",
    favorite: false,
  },
];
export default function Inbox() {
  const [collapsed, setCollapsed] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("New message");
  const [subtitle, setSubtitle] = useState("Create new message");
  const [favorite, setFavorite] = useState(false);
  const [dataModal, setDataModal] = useState<IModalData>({
    profile: { name: "", email: "" },
    history: [],
    contacts: [],
  });
  const onChangeCollapsed = () => setCollapsed(!collapsed);
  const handleModalOpen = ({ isOpen, data }: Response) => {
    const { event, history, profile } = data;
    setTitle(event.title);
    setSubtitle(event.subTitle);
    setFavorite(event.favorite);
    setDataModal({
      profile: profile,
      history: history,
      contacts: contacts,
    });
    setModalIsOpen(isOpen);
  };
  return (
    <Admin
      title="Message"
      subnav={<SubNav />}
      cta={
        <Button
          title="New Message"
          style="primary"
          // onClick={() => setModalIsOpen(true)}
        />
      }
    >
      <ClassModal
        favorite={favorite}
        data={dataModal}
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        title={title}
        subtitle={subtitle}
      />
      <div className={styles.container}>
        <Search />
        <div className={styles.wrapper}>
          <Chat collapsed={collapsed} onChangeCollapsed={onChangeCollapsed} />
          <InboxMenu
            openModal={handleModalOpen}
            collapsed={collapsed}
            onChangeCollapsed={onChangeCollapsed}
          />
        </div>
      </div>
    </Admin>
  );
}
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
      <SubNavLink title="All" bubble={14} selected={true} to="/inbox" />
      <SubNavLink title="Unread" bubble={5} to="/inbox/unread" />
      <SubNavLink title="Starred" bubble={16} to="/inbox/starred" />
      <SubNavLink title="Sent" bubble={5} to="/inbox/sent" />
    </>
  );
};
