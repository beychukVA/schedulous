import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Tabs from "./Tabs";
import { ITab } from "./Tabs";
import ProfileContent from "./Tabs/Content/ProfileContent/ProfileContent";
import TemplatesContent from "./Tabs/Content/TemplatesContent/TemplatesContent";
import ScheduleContent from "./Tabs/Content/ScheduleContent/ScheduleContent";
import { ITemplate } from "./Tabs/Content/TemplatesContent/types/Template";
import { Response } from "~/components/AppointmentModal/types/Response";

const tabs: ITab[] = [
  {
    id: "1",
    label: "Profile",
  },
  {
    id: "2",
    label: "Templates",
  },
  {
    id: "3",
    label: "Schedule",
  },
];

const templates: ITemplate[] = [
  {
    id: 1,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
  {
    id: 2,
    message:
      "Great! You are confirmed for [Class Name] with [Coach] at [Date] [Time]. 👊 ",
    category: "Class Confirmation",
  },
  {
    id: 3,
    message: "Great! [Staff] will meet you in [Location] at [Date] [Time]. 🙌",
    category: "Appointment Confirmation",
  },
  {
    id: 4,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
  {
    id: 5,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
  {
    id: 6,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
  {
    id: 7,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
  {
    id: 8,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
  {
    id: 9,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
  {
    id: 10,
    message:
      "Hey [Name], this is [Staff] from [Company]. I wanted to quickly introduce myself. 👋",
    category: "Welcome",
  },
];

interface IProps {
  collapsed: boolean;
  onChangeCollapsed: () => void;
  openModal: ({}: Response) => void;
}

export default function InboxMenu({
  collapsed,
  onChangeCollapsed,
  openModal,
}: IProps) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);

  const handleTabClick = (id) => setSelectedId(id);

  return (
    <div
      className={classNames(styles.container, {
        [styles.collapsed]: collapsed,
      })}
    >
      <Tabs
        tabs={tabs}
        selectedId={selectedId}
        onClick={handleTabClick}
        collapsed={collapsed}
        onChangeCollapsed={onChangeCollapsed}
      />
      <div>
        {selectedId === tabs[0].id && (
          <div>
            <ProfileContent openModal={openModal} />
          </div>
        )}
        {selectedId === tabs[1].id && (
          <div>
            <TemplatesContent templates={templates} />
          </div>
        )}
        {selectedId === tabs[2].id && (
          <div>
            <ScheduleContent />
          </div>
        )}
      </div>
    </div>
  );
}
