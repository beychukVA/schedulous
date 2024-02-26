import React from "react";
import Avatar from "~/components/Avatar";
import Font from "~/components/Font";
import styles from "./styles.module.scss";
import FavoritesIcon from "~/icons/Favorites";
import classNames from "classnames";

interface IProps {
  name: string;
  email: string;
  classes?: string;
  favorite?: boolean;
  mb?: "large";
  nameStyle?: string;
  emailStyle?: string;
  size?: number;
  flex?: boolean;
}

export default function Profile({
  name,
  email,
  favorite = false,
  classes,
  mb,
  nameStyle,
  emailStyle,
  size = 45,
  flex = false,
}: IProps) {
  return (
    <div
      className={classNames(`${styles.container} ${classes}`, {
        [styles.marginBottomLarge]: mb === "large",
      })}
    >
      <div className={styles.avatar}>
        <Avatar person={{ name }} size={size} />
      </div>
      <div
        className={`${styles.data_container} ${
          flex && styles.paddingLeftSmall
        }`}
      >
        <div className={flex && styles.flexContainer}>
          <div className={styles.name_container}>
            <Font
              block={false}
              size="large"
              weight="xBold"
              color="black"
              mb="none"
              mt="none"
              className={nameStyle}
            >
              {name}
            </Font>
            {favorite && (
              <div className={styles.icon}>
                <FavoritesIcon color={favorite ? "#936DFF" : "#ffffff"} />
              </div>
            )}
          </div>
          <Font
            block={false}
            size="small"
            weight="regular"
            color="black"
            mb="none"
            mt="none"
            className={emailStyle}
          >
            {email}
          </Font>
        </div>
      </div>
    </div>
  );
}
