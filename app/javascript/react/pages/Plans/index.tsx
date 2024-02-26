import React from "react";
import SettingsLayout from "~/layouts/SettingsLayout";
import Button from "~/components/Button";
import BreadCrumb from "~/components/BreadCrumbs";
import useAccount from "~/hooks/useAccount";
import PlanList from "./List";
import EditModal from "./components/Modal/Edit";
import NewModal from "./components/Modal/New";
import createPage from "~/utils/createPage";
import PLANS_QUERY from "./Query";

const breadCrumbData = [
  {
    title: "Plans",
    url: "",
  },
];

const Plans = ({ data }) => {
  const { plans } = data;

  const currentAccount = useAccount();
  const [isEditing, setIsEditing] = React.useState(false);
  const [isCreating, setIsCreating] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const showEditForm = (id) => {
    setSelectedPlan(id);
    setIsEditing(true);
  };

  const showNewForm = () => {
    setSelectedPlan(null);
    setIsCreating(true);
  };

  return (
    <>
      {selectedPlan && (
        <EditModal
          isOpen={isEditing}
          onSubmit={() => setIsEditing(false)}
          planId={selectedPlan}
          onClose={() => setIsEditing(false)}
        />
      )}
      <NewModal
        isOpen={isCreating}
        onSubmit={() => setIsCreating(false)}
        onClose={() => setIsCreating(false)}
      />

      <SettingsLayout
        title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
        full={true}
        cta={<Button title="New Plan" style="primary" onClick={showNewForm} />}
      >
        {currentAccount.hasStripe ? (
          <PlanList plans={plans} onClick={showEditForm} />
        ) : (
          <div>No Stripe</div>
        )}
      </SettingsLayout>
    </>
  );
};

export default createPage({
  title: "Plans",
  component: Plans,
  query: PLANS_QUERY,
});
