import * as React from "react";
import ErrorPage from "~/pages/Error";
import FEATURES_QUERY from "./FeaturesQuery";
import HeadTags, { ITagsData } from "./HeadTags";
import LoadingState from "./LoadingState";
import RequireLogin from "./RequireLogin";
import addContextToQuery from "./context";
import browserRedirect from "~/utils/browserRedirect";
import paths, { ILocation } from "~/paths";
import { DocumentNode } from "graphql";
import { ApolloError, ApolloClient } from "apollo-client";
import { Query } from "react-apollo";
import { environment } from "~/config";

type IParams = any;

interface IRequireFeature {
  enabled?: string;
  disabled?: string;
  redirectPath: ILocation | ((params: IParams) => ILocation);
}

interface IOptions<T> {
  component: React.FunctionComponent<IProps<T>> | React.Component<IProps<T>>;
  query: DocumentNode | null;
  queryVariables?: object | ((params: IParams) => object);
  requireLogin?: boolean;
  requirePermissions?: (data: T) => boolean;
  requireFeature?: IRequireFeature;
  tags?: ITagsData | ((data: T) => ITagsData);
  title?: string | ((data: T) => string);
  titleNoPrefix?: boolean;

  // Remove when remove waitlist
  requireWhitelist?: (data: T) => boolean;
}

interface IProps<T> {
  client: ApolloClient<any>;
  params: IParams;
  data: T;
  variables: object;
  refetch: () => void;
  fetchMore: () => void;
  loading: boolean;
}

export default function createPage<T = null>({
  component,
  query,
  queryVariables,
  requireLogin,
  requirePermissions,
  requireFeature,
  requireWhitelist,
  tags,
  title,
  titleNoPrefix,
}: IOptions<T>) {
  const Component: any = component;

  let updatedQuery: any = null;

  function Page({ params }: { params: IParams }) {
    if (!updatedQuery || !environment.isBrowser) {
      updatedQuery = addContextToQuery(query);
    }

    return (
      <Query<T> query={updatedQuery}>
        {({
          client,
          loading,
          error,
          data,
          variables,
          refetch,
          fetchMore,
          networkStatus,
        }) => {
          if (error) {
            if (isNotFoundError(error) || isAccessDeniedError(error)) {
              return <ErrorPage statusCode={404} />;
            }
            return <ErrorPage statusCode={500} />;
          }

          if ((loading && isNetworkFetchingMore(networkStatus)) || !data) {
            return <LoadingState />;
          }

          if (requirePermissions && !requirePermissions(data)) {
            return <ErrorPage statusCode={401} />;
          }

          if (requireWhitelist && requireWhitelist(data)) {
            if (process.browser) {
              if (params.requestBrowserPush) {
                browserRedirect(
                  paths.sign.waitlist() + "?requestBrowserPush=true"
                );
              } else {
                browserRedirect(paths.sign.waitlist());
              }
            }
            return null;
          }

          const Wrap: any = requireLogin ? RequireLogin : React.Fragment;

          return (
            <Wrap>
              <HeadTags
                titleNoPrefix={titleNoPrefix}
                tags={typeof tags === "function" ? tags(data) : tags}
                title={typeof title === "function" ? title(data) : title}
              />
              <Component
                client={client}
                params={params}
                data={data}
                variables={variables}
                refetch={refetch}
                fetchMore={fetchMore}
                loading={loading && isNetworkRequestInFlight(networkStatus)}
              />
            </Wrap>
          );
        }}
      </Query>
    );
  }

  Page.displayName = `page(${
    Component.displayName || Component.name || "Page"
  })`;

  Page.getInitialProps = requireFeature
    ? async (context: any) => {
        return getInitialPropsWithFeature(requireFeature, context);
      }
    : getInitialPageProps;

  return Page;
}

// Please refer to apollo-client/core/networkRequest.d.ts for more info
function isNetworkRequestInFlight(networkStatus: number) {
  return networkStatus < 7;
}

function isNetworkFetchingMore(networkStatus: number) {
  return networkStatus === 1;
}

// At the first request context might not be fetched. Get the feature flags before hand
async function getFeatureFlags({ apolloClient }: { apolloClient: any }) {
  const { data, error } = await apolloClient.query({ query: FEATURES_QUERY });
  return error ? [] : data.viewer.features;
}

// If page requires feature flag, check for the flag.
async function getInitialPropsWithFeature(
  requireFeature: IRequireFeature,
  context: { query: any; apolloClient: any; res: any }
) {
  const featureFlags = await getFeatureFlags(context);

  const shouldRedirect =
    (requireFeature.enabled &&
      !featureFlags.includes(requireFeature.enabled)) ||
    requireFeature.disabled ||
    featureFlags.includes(requireFeature.disabled);

  if (!shouldRedirect) return getInitialPageProps(context);

  const redirectPath =
    typeof requireFeature.redirectPath === "function"
      ? requireFeature.redirectPath(context.query)
      : requireFeature.redirectPath;

  const response = context.res;
  if (response) {
    // No Access Page
    response.writeHead(302, {
      Location: redirectPath,
    });
    response.end();
  } else {
    browserRedirect(redirectPath);
  }

  return {};
}

function isNotFoundError(error: ApolloError) {
  return (
    error.graphQLErrors &&
    !!error.graphQLErrors.find(({ message }) => message === "RECORD_NOT_FOUND")
  );
}

function isAccessDeniedError(error: ApolloError) {
  return (
    error.graphQLErrors &&
    !!error.graphQLErrors.find(({ message }) => message === "ACCESS_DENIED")
  );
}

function getInitialPageProps(context: { query: any }) {
  return { params: context.query || {} };
}
