import React, { useState } from "react";

import Form from "~/components/Form";
import Button from "~/components/Button";
import "./styles.scss";
import classNames from "classnames";

export default function MembershipForm({
  handleSubmit,
  isVisibleConfirmMembership,
  today,
  membership,
}) {
  const onFormSubmit = async () => {
    return Promise.resolve("abc");
  };
  const [isEditingRecurrentPrice, setIsVisibleEditAndCheckedRecurrentPrice] =
    useState(false);
  const [isEditingPaymentPrice, setIsVisibleEditAndCheckedPaymentPrice] =
    useState(false);
  const [recurrentPrice, setRecurrentPrice] = useState("99.00");
  const [paymenPrice, setPaymenPrice] = useState("80.00");
  const characterWidth = 10;
  const [inputsWidth, setInputsWidth] = useState({
    membershipAmountInputWidth: characterWidth,
    recurrentPriceInputWidth: characterWidth,
  });

  const changeHandler = (key, evt) => {
    let newinputsWidth = { ...inputsWidth };
    newinputsWidth[key] = characterWidth * evt.target.value.length;
    if (key == "recurrentPriceInputWidth") {
      setRecurrentPrice(evt.target.value);
    } else {
      setPaymenPrice(evt.target.value);
    }
    setInputsWidth(newinputsWidth);
  };

  const memberships = [
    { value: "gold", label: "Gold" },
    { value: "silver", label: "Silver" },
  ];

  const handleEditAndChecked = (key) => {
    if (key == "recurrentPrice") {
      if (isEditingRecurrentPrice) {
        setIsVisibleEditAndCheckedRecurrentPrice(false);
      } else {
        setIsVisibleEditAndCheckedRecurrentPrice(true);
      }
    } else {
      if (isEditingPaymentPrice) {
        setIsVisibleEditAndCheckedPaymentPrice(false);
      } else {
        setIsVisibleEditAndCheckedPaymentPrice(true);
      }
    }
  };

  return (
    <>
      <Form
        service={onFormSubmit}
        onSubmit={handleSubmit}
        formOptions={{
          defaultValues: {
            today: isVisibleConfirmMembership ? today : "",
            selectMembership: isVisibleConfirmMembership ? membership : "",
          },
        }}
      >
        <Form.Select
          label="Select Membership"
          name={"selectMembership"}
          path=""
          options={memberships}
        />
        <Form.Input label="Today" name="today" path="dob" />
        {isVisibleConfirmMembership && (
          <div className="membership-detail-wrapper">
            <p className="title">Membership Details</p>
            <div>
              <p className="content-label">Down Payment</p>
              <div
                className={isEditingPaymentPrice ? "hide-input" : "show-input"}
              >
                <p
                  className="edit-icon"
                  onClick={() => handleEditAndChecked("paymentPrice")}
                >
                  {isEditingPaymentPrice ? "CheckBox" : "Edit"}
                </p>
                {isEditingPaymentPrice ? (
                  <>
                    <p>$</p>
                    <Form.Input
                      className={classNames("class-input")}
                      style={{
                        all: "unset",
                        textAlign: "right",
                        minWidth: "50px",
                        maxWidth: "150px",
                        width: inputsWidth.membershipAmountInputWidth,
                      }}
                      autoFocus
                      onChange={(e) =>
                        changeHandler("membershipAmountInputWidth", e)
                      }
                      defaultValue={paymenPrice}
                      type={"number"}
                      name="downPaymentPrice"
                      path="dob"
                    />
                  </>
                ) : (
                  <p className={"price-text"}>${paymenPrice}</p>
                )}
              </div>
            </div>
            <div>
              <p className="content-label">Recurring (Weekly)</p>
              <div
                className={
                  isEditingRecurrentPrice ? "hide-input" : "show-input"
                }
              >
                <p
                  className="edit-icon"
                  onClick={() => handleEditAndChecked("recurrentPrice")}
                >
                  {isEditingRecurrentPrice ? "CheckBox" : "Edit"}
                </p>
                {isEditingRecurrentPrice ? (
                  <>
                    <p>$</p>
                    <Form.Input
                      className={classNames("class-input")}
                      style={{
                        all: "unset",
                        textAlign: "right",
                        minWidth: "50px",
                        maxWidth: "150px",
                        width: inputsWidth.recurrentPriceInputWidth,
                      }}
                      autoFocus
                      onChange={(e) =>
                        changeHandler("recurrentPriceInputWidth", e)
                      }
                      type={"number"}
                      name="recurrentPrice"
                      defaultValue={recurrentPrice}
                      path="dob"
                    />
                  </>
                ) : (
                  <p className={"price-text"}>${recurrentPrice}</p>
                )}
              </div>
            </div>
            <div>
              <p className="content-label">Start</p>
              <p className="membership-date">{today}</p>
            </div>
          </div>
        )}
        <Button title="Create Membership" type="submit" />
      </Form>
    </>
  );
}
