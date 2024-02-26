import { ApolloLink, concat } from 'apollo-link';
import { environment } from '~/config';

declare global {
  // tslint:disable-next-line
  interface Window {
    test: {
      apolloRequestsInFlight: number;
    };
  }
}

let recordRequestsInFlight: any = (networkLink: any) => networkLink;

if (environment.isBrowser && environment.isTest) {
  recordRequestsInFlight = (networkLink: any) => {
    const recorderLink = new ApolloLink((operation: any, forward: any) => {
      window.test.apolloRequestsInFlight += 1;

      return forward(operation).map((result: any) => {
        window.test.apolloRequestsInFlight -= 1;
        return result;
      });
    });
    return concat(recorderLink, networkLink);
  };
}

export default recordRequestsInFlight;
