import fetch from 'isomorphic-unfetch';

export default class ServerFetcher {
  reqHeaders: any;
  resHeaders: any = [];

  constructor(req: any) {
    this.reqHeaders = {
      cookie: req.headers.cookie,
      'User-Agent': req.headers['user-agent'],
    };

    if (req.headers['x-forwarded-for']) {
      this.reqHeaders['X-Forwarded-For'] = req.headers['x-forwarded-for'];
    }
  }

  fetch = (url: string, options: any) => {
    options = {
      ...options,
      headers: {
        ...options.headers,
        ...this.reqHeaders,
      },
    };
    return fetch(url, options).then((res: any) => {
      const setCookie = res.headers.raw()['set-cookie'];
      if (setCookie) {
        if (typeof setCookie === 'string') {
          this.resHeaders.push(['Set-Cookie', setCookie]);
        } else {
          this.resHeaders = this.resHeaders.concat(
            setCookie.map((value: string) => ['Set-Cookie', value]),
          );
        }
      }
      return res;
    });
  };

  setResponseHeaders(res: any) {
    this.resHeaders.forEach(([name, value]: string[]) => {
      res.setHeader(name, value);
    });
  }
}
