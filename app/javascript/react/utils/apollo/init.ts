import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { GRAPHQL_URI } from '~/config';
import recordRequestsInFlight from './recordRequestsInFlight';
import { dataIdFromObject } from '~/utils/graphql';

function createClient(initialState: any, { fetch }: { fetch: any }) {
  const headers: any = {
    'X-Requested-With': 'XMLHttpRequest',
  };

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: false,
    link: recordRequestsInFlight(
      new HttpLink({
        uri: GRAPHQL_URI,
        credentials: 'include',
        headers,
        fetch: fetch || global.fetch,
      }),
    ),
    cache: new InMemoryCache({
      dataIdFromObject,
      freezeResults: true,
    }).restore(initialState || {}),
    assumeImmutableResults: true,
  });
}

let apolloClient: ApolloClient<any> | null = null;

export default function initApollo(initialState: any, options: any = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createClient(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createClient(initialState, options);
  }

  return apolloClient;
}
