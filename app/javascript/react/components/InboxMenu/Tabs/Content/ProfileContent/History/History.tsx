import classNames from "classnames";
import React from "react";
import Font from "~/components/Font";
import { IHistory } from "../../types/History";
import HistoryCard from "./HistoryCard/HistoryCard";
import styles from "./styles.module.scss";

interface IProps {
  historys: IHistory[];
  scroll?: boolean;
}

export default function History({ historys, scroll = false }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <Font
          block={false}
          size="xSmall"
          weight="xBold"
          color="gray"
          mb="none"
          mt="none"
        >
          PAST HISTORY
        </Font>
        <Font
          block={false}
          size="xSmall"
          weight="xBold"
          color="gray"
          mb="none"
          mt="none"
        >
          STATUS
        </Font>
      </div>
      <hr />
      <ul
        className={classNames(styles.content_container, {
          [styles.scroll]: scroll,
        })}
      >
        {historys &&
          historys.map(({ id, title, subTitle, status, color }) => (
            <HistoryCard
              key={id}
              title={title}
              subTitle={subTitle}
              status={status}
              color={color}
            />
          ))}
      </ul>
    </div>
  );
}
