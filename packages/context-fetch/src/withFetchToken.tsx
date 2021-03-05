import React from 'react';

import { compose } from '../../core/src';
import { useReactOidc } from '../../context/src';
import { fetchToken } from '../../fetch-core/src';

type WindowFetch = typeof fetch;

const withUser = (WrappedComponent: React.ComponentType) => (props: any) => {
  const { oidcUser } = useReactOidc();
  return <WrappedComponent {...props} user={oidcUser} />;
};

const withTokenFromFetchToken = (fetch: WindowFetch) => (WrappedComponent: React.ComponentType) => (props: any) => {
  const { fetch: fetchWithToken } = fetchToken(fetch)(props);
  return <WrappedComponent {...props} fetch={fetchWithToken} />;
};

const withfetchToken = (fetch: WindowFetch) =>
  compose(
    withUser,
    withTokenFromFetchToken(fetch)
  );

export default withfetchToken;
