import React, { useEffect, useState, useReducer } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import People from "./pages/People/Index";
import Person from "./pages/People/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Business from "./pages/Business";
import Payments from "./pages/Payments";
import Schedule from "./pages/Schedule/Index";
import PowerUps from "./pages/PowerUps";
import Plans from "./pages/Plans";
import Team from "./pages/Team";
import Billing from "./pages/Billing";
import Notifications from "./pages/Notifications";
import SettingsAccount from "./pages/SettingsAccount";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


import "reactjs-popup/dist/index.css";
import "~/styles/global.scss";

import initApollo from "./utils/apollo/init";
import { ApolloProvider } from "react-apollo";
import AccountConfirmation from "./pages/AccountConfirmation";

export default function Router() {
  const apolloClient = initApollo({});

  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account-confirmation" element={<AccountConfirmation/>} />
          <Route path="/signup" element={<Signup />} />
          {/* Admin */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<Person />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/reports" element={<Reports />} />
          {/* Power Ups */}
          <Route path="/power-ups" element={<PowerUps />} />
          {/* Settings */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/account" element={<SettingsAccount />} />
          <Route path="/settings/business" element={<Business />} />
          <Route path="/settings/payments" element={<Payments />} />
          <Route path="/settings/schedule" element={<Schedule />} />
          <Route path="/settings/plans" element={<Plans />} />
          <Route path="/settings/team" element={<Team />} />
          <Route path="/settings/billing" element={<Billing />} />
          <Route path="/settings/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
