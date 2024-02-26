/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserSignIn
// ====================================================

export interface UserSignIn_response_node {
  __typename: "User";
  email: string;
}

export interface UserSignIn_response_errors {
  __typename: "Error";
  field: string;
  message: string;
}

export interface UserSignIn_response {
  __typename: "UserSignInPayload";
  node: UserSignIn_response_node | null;
  errors: UserSignIn_response_errors[];
}

export interface UserSignIn {
  response: UserSignIn_response;
}

export interface UserSignInVariables {
  input: UserSignInInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PeopleIndex
// ====================================================

export interface PeopleIndex_people_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface PeopleIndex_people {
  __typename: "Person";
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  user: PeopleIndex_people_user | null;
}

export interface PeopleIndex {
  people: PeopleIndex_people[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PersonCreate
// ====================================================

export interface PersonCreate_response_node_user {
  __typename: "User";
  id: string;
  email: string;
  phone: string;
}

export interface PersonCreate_response_node {
  __typename: "Person";
  id: string;
  name: string;
  user: PersonCreate_response_node_user | null;
}

export interface PersonCreate_response_errors {
  __typename: "Error";
  field: string;
  message: string;
}

export interface PersonCreate_response {
  __typename: "PersonCreatePayload";
  node: PersonCreate_response_node | null;
  errors: PersonCreate_response_errors[];
}

export interface PersonCreate {
  response: PersonCreate_response;
}

export interface PersonCreateVariables {
  input: PersonCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PlanCreate
// ====================================================

export interface PlanCreate_response_node {
  __typename: "Plan";
  id: string;
  name: string;
  amount: number;
  interval: string;
  intervalType: string;
}

export interface PlanCreate_response_errors {
  __typename: "Error";
  field: string;
  message: string;
}

export interface PlanCreate_response {
  __typename: "PlanCreatePayload";
  node: PlanCreate_response_node | null;
  errors: PlanCreate_response_errors[];
}

export interface PlanCreate {
  response: PlanCreate_response;
}

export interface PlanCreateVariables {
  input: PlanCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Plan
// ====================================================

export interface Plan_plan {
  __typename: "Plan";
  name: string;
}

export interface Plan {
  plan: Plan_plan | null;
}

export interface PlanVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PlanUpdate
// ====================================================

export interface PlanUpdate_response_node {
  __typename: "Plan";
  id: string;
  name: string;
}

export interface PlanUpdate_response {
  __typename: "PlanUpdatePayload";
  node: PlanUpdate_response_node | null;
}

export interface PlanUpdate {
  response: PlanUpdate_response;
}

export interface PlanUpdateVariables {
  input: PlanUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Plans
// ====================================================

export interface Plans_plans {
  __typename: "Plan";
  id: string;
  name: string;
  amount: number;
  interval: string;
  intervalType: string;
}

export interface Plans {
  plans: Plans_plans[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserCreate
// ====================================================

export interface UserCreate_response_node {
  __typename: "User";
  email: string;
}

export interface UserCreate_response_errors {
  __typename: "Error";
  field: string;
  message: string;
}

export interface UserCreate_response {
  __typename: "UserCreatePayload";
  node: UserCreate_response_node | null;
  errors: UserCreate_response_errors[];
}

export interface UserCreate {
  response: UserCreate_response;
}

export interface UserCreateVariables {
  input: UserCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamMembers
// ====================================================

export interface TeamMembers_teamMembers_user_person {
  __typename: "Person";
  name: string;
}

export interface TeamMembers_teamMembers_user {
  __typename: "User";
  id: string;
  email: string;
  person: TeamMembers_teamMembers_user_person;
}

export interface TeamMembers_teamMembers {
  __typename: "TeamMember";
  id: string;
  user: TeamMembers_teamMembers_user;
  role: string;
}

export interface TeamMembers {
  teamMembers: TeamMembers_teamMembers[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Context
// ====================================================

export interface Context_viewer_account {
  __typename: "Account";
  name: string;
  timeZone: string;
  hasStripe: boolean;
}

export interface Context_viewer {
  __typename: "Viewer";
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  isTeamMember: boolean;
  features: string[];
  account: Context_viewer_account;
}

export interface Context {
  viewer: Context_viewer | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeaturesQuery
// ====================================================

export interface FeaturesQuery_viewer {
  __typename: "Viewer";
  features: string[];
}

export interface FeaturesQuery {
  viewer: FeaturesQuery_viewer | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ViewerFragment
// ====================================================

export interface ViewerFragment_account {
  __typename: "Account";
  name: string;
  timeZone: string;
  hasStripe: boolean;
}

export interface ViewerFragment {
  __typename: "Viewer";
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  isTeamMember: boolean;
  features: string[];
  account: ViewerFragment_account;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Autogenerated input type of PersonCreate
 */
export interface PersonCreateInput {
  sourceComponent?: string | null;
  clientMutationId?: string | null;
  name?: string | null;
  user?: UserInput | null;
}

/**
 * Autogenerated input type of PlanCreate
 */
export interface PlanCreateInput {
  sourceComponent?: string | null;
  clientMutationId?: string | null;
  name: string;
  amount: string;
  interval: string;
  intervalType: string;
  onetime?: boolean | null;
  onetimeAmount?: string | null;
  planDuration?: string | null;
  planDurationType?: string | null;
}

/**
 * Autogenerated input type of PlanUpdate
 */
export interface PlanUpdateInput {
  sourceComponent?: string | null;
  clientMutationId?: string | null;
  planId: string;
  name: string;
}

/**
 * Autogenerated input type of UserCreate
 */
export interface UserCreateInput {
  sourceComponent?: string | null;
  clientMutationId?: string | null;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  accountName?: string | null;
  accountId?: string | null;
}

/**
 * Attributes for creating or updating a user
 */
export interface UserInput {
  email?: string | null;
  phone?: string | null;
  password?: string | null;
  skipPassword?: string | null;
}

/**
 * Autogenerated input type of UserSignIn
 */
export interface UserSignInInput {
  sourceComponent?: string | null;
  clientMutationId?: string | null;
  email?: string | null;
  password?: string | null;
  account_id?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
