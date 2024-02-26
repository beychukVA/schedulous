import * as React from 'react';
import useIsLoggedIn from '~/hooks/useIsLoggedIn';
import browserRedirectToLogin from '~/utils/browserRedirectToLogin';

interface IProps {
  children: React.ReactNode;
}

export default function RequireLogin({ children }: IProps) {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) {
    if (process.browser) {
      browserRedirectToLogin();
    }
    return null;
  }

  return children;
}
