import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Font from "~/components/Font";
import Collapse from "~/icons/Collapse";

export interface ITab {
  id: string | number;
  label?: string;
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: string | number) => void;
  collapsed: boolean;
  onChangeCollapsed: () => void;
}

export default function Tabs({
  className,
  selectedId,
  tabs,
  onClick,
  collapsed,
  onChangeCollapsed,
}: ITabsProps) {
  return (
    <div className={classNames(styles.tabs, className)}>
      {tabs &&
        tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={classNames(styles.tab, {
                [styles.tab__selected]: tab.id === selectedId,
              })}
              onClick={() => onClick(tab.id)}
            >
              <div
                className={classNames({
                  tab_label: styles.tab_label,
                  tab_label__selected: tab.id === selectedId,
                })}
              >
                <Font
                  block={false}
                  size="small"
                  weight={tab.id === selectedId ? "xBold" : "regular"}
                  color="black"
                  mb="none"
                  mt="none"
                >
                  {tab.label}
                </Font>
              </div>
            </div>
          );
        })}
      <button
        onClick={() => onChangeCollapsed()}
        className={classNames(styles.collapse_icon, {
          [styles.hide]: collapsed,
        })}
      >
        <Collapse />
      </button>
    </div>
  );
}
