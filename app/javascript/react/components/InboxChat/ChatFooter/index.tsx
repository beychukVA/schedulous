import React, { useState } from "react";
import Form from "~/components/Form";
import styles from "./styles.module.scss";
import Button from "~/components/Button";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router";
import Font from "~/components/Font";
import ResizePopup from "./Popup/ResizePopup";
import SmilePopup from "./Popup/SmilePopup";

const CONTROLS_LINK = [
  { title: "Resize", url: "", icon: <ResizePopup />, rendered: true },
  {
    title: "Smile",
    url: "",
    icon: <SmilePopup />,
    rendered: true,
  },
];

export default function ChatFooter() {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  return (
    <div className={styles.container}>
      <Form.Textarea
        placeholder="Type message ..."
        name="message"
        className={styles.input}
        onChange={handleInputChange}
      />
      <div className={styles.controls}>
        <div className={styles.icon_container}>
          {CONTROLS_LINK.map((link, i) => (
            <NavLink
              key={i}
              title={link.title}
              icon={link.icon}
              url={link.url}
              rendered={link.rendered}
            />
          ))}
        </div>
        <Button
          className={styles.button}
          title="Send"
          disabled={!message}
          style="primary"
          onClick={() => ""}
        />
      </div>
    </div>
  );
}

function NavLink({ title, url, icon, rendered }) {
  const Icon = icon;
  const location = useLocation();

  const match = location.pathname.includes(url);

  const classes = classNames(styles.link, {
    [styles.linkSelected]: match,
  });

  return rendered ? (
    icon
  ) : (
    <Popup
      key={title}
      on={["click"]}
      position="top center"
      trigger={
        <Link to={url} className={classes} title={title}>
          <Icon color={match ? "#718096" : "#194bfb"} />
        </Link>
      }
    >
      <Font size="medium" weight="xBold">
        {title}
      </Font>
    </Popup>
  );
}
