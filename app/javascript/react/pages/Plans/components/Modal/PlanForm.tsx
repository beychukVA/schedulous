import React from "react";
import Form from "~/components/Form";
import Button from "~/components/Button";
import Font from "~/components/Font";
import Flex from "~/components/Flex";
import styles from "../styles.module.scss";
import PLAN_CREATE_MUTATION from "./CreateMutation";
import PLAN_UPDATE_MUTATION from "./UpdateMutation";
import PLAN_QUERY from "~/pages/Plans/Query";
import Box from "~/components/Box";
import stripTypeName from "~/utils/stripTypeName";

interface IProps {
  planId?: any;
  initialValues?: any;
  onSubmit?: () => void;
}

const INTERVAL_TYPES = [
  { label: "Days", value: "day" },
  { label: "Weeks", value: "week" },
  { label: "Months", value: "month" },
  { label: "Years", value: "year" },
];

export default function PlanForm({
  planId,
  onSubmit,
  initialValues = {},
}: IProps) {
  return (
    <Form.Mutation
      mutation={planId ? PLAN_UPDATE_MUTATION : PLAN_CREATE_MUTATION}
      mutationInput={planId ? { planId: planId } : undefined}
      data-track="plan-form"
      onSubmit={onSubmit}
      updateCache={(cache, { data }) => {
        const node = data?.response?.node;

        if (node) {
          const { viewer, plans } = cache.readQuery({ query: PLAN_QUERY });
          cache.writeQuery({
            query: PLAN_QUERY,
            data: {
              viewer,
              plans: [node, ...plans],
            },
          });
        }
      }}
      initialValues={stripTypeName(initialValues)}
    >
      <Form.Input label="Name" name="name" />
      {!planId && (
        <>
          <Form.Input label="Price" name="amount" />

          <div className={styles.interval}>
            <Font block={true} size="small" weight="bold" color="gray-500">
              Recurring every
            </Font>

            <div>
              <Form.Input noMargin={true} name="interval" label="Interval" />
            </div>
            <Box ml="small">
              <Form.Input
                noMargin={true}
                name="intervalType"
                label="Interval Type"
                options={INTERVAL_TYPES}
              />
            </Box>
          </div>
        </>
      )}
      <br />
      <Flex.Row justify="flex-end">
        <Button type="submit" title="Save Plan" />
      </Flex.Row>
    </Form.Mutation>
  );
}
