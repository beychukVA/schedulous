import * as React from 'react';
import ServerFetcher from './serverFetcher';
import initApollo from './init';
import { ApolloClient } from 'apollo-boost';
import { getDataFromTree } from 'react-apollo';

export default function withApollo(App: any): any {
  return class WithApollo extends React.Component<any, any> {
    static displayName = `WithApollo(${App.displayName})`;

    static getInitialProps = buildInitialProps(App);

    apolloClient: ApolloClient<any>;

    constructor(props: any) {
      super(props);

      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
}

export function buildInitialProps(App: any) {
  if (process.browser) {
    return async (ctx: any) => {
      const apollo = initApollo({});

      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      return {
        ...appProps,
        apolloState: apollo.cache.extract(),
      };
    };
  }

  return async (ctx: any) => {
    const {
      Component,
      router,
      ctx: { req, res },
    } = ctx;

    const fetcher = new ServerFetcher(req);

    const apollo = initApollo({}, { fetch: fetcher.fetch });

    ctx.ctx.apolloClient = apollo;

    let appProps = {};
    if (App.getInitialProps) {
      appProps = await App.getInitialProps(ctx);
    }

    if (res && res.finished) {
      return {};
    }

    try {
      await getDataFromTree(
        <App
          {...appProps}
          Component={Component}
          router={router}
          apolloClient={apollo}
        />,
      );
    } catch (error) {
      // TODO: Log Error
      // captureError(error);
    }

    fetcher.setResponseHeaders(res);

    return {
      ...appProps,
      apolloState: apollo.cache.extract(),
    };
  };
}
