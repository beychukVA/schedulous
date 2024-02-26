import React from "react";
import ReactModal from "react-modal";
import Close from "~/icons/Close";
import FavoritesIcon from "~/icons/Favorites";
import styles from "./styles.module.scss";
import classNames from "classnames";

export interface IModalProps {
  title: string;
  subtitle?: string;
  favorite?: boolean;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  toggle?: React.ReactNode;
  data?: any;
  dismissible?: boolean;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    overflow: "hidden",
    transform: "translate(-50%, -50%)",
    minWidth: "550px",
    maxHeight: "760px",
    borderRadius: "5px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export default function Modal({
  title,
  subtitle,
  favorite,
  isOpen,
  onClose,
  children,
  toggle,
}: IModalProps) {
  return (
    <ReactModal
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <div
        className={classNames(styles.header, {
          [styles.headerWithToggle]: toggle,
        })}
      >
        <div className={styles.headerContent}>
          <div className={styles.favorite_container}>
            {favorite && (
              <div className={styles.favorite_icon}>
                <FavoritesIcon color={favorite ? "#936DFF" : "#ffffff"} />
              </div>
            )}
            <div className={styles.title}>{title}</div>
          </div>

          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          {toggle}
        </div>
        <div className={styles.headerClose} onClick={onClose}>
          <Close />
        </div>
      </div>
      {children}
    </ReactModal>
  );
}
