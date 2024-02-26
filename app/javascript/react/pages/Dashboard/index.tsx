import React from "react";
import useViewer from "~/hooks/useViewer";
import createPage from "~/utils/createPage";

import Admin from "../../layouts/Admin";

const Dashboard = () => {
  const viewer = useViewer();

  return <Admin title="Dashboard">{JSON.stringify(viewer)}</Admin>;
};

export default createPage({
  title: "Dashboard",
  query: null,
  component: Dashboard,
});
