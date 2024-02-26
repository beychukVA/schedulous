import React from "react";
import Button from "~/components/Button";
import Form from "~/components/Form";
import styles from "./styles.module.scss";
import TemplateCard from "./TemplateCard/TemplateCard";
import { ITemplate } from "./types/Template";

interface IProps {
  templates: ITemplate[];
}

export default function TemplatesContent({ templates }: IProps) {
  return (
    <div className={styles.container}>
      <Form.Text
        placeholder="Search  templates"
        name="message"
        className={styles.input}
      />
      <ul className={styles.templates_container}>
        {templates &&
          templates.map(({ id, message, category }) => (
            <TemplateCard key={id} message={message} category={category} />
          ))}
      </ul>
      <div className={styles.button_container}>
        <Button
          className={styles.button}
          title="Create New Template"
          style="tertiary"
          onClick={() => ""}
        />
      </div>
    </div>
  );
}
