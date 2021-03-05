import { compose } from '../../core/src';
import { withFetchRedirectionOn403, withFetchSilentAuthenticateAndRetryOn401 } from '../../fetch-core/src';

import withFetchToken from './withFetchToken';

type WindowFetch = typeof fetch;

const enhance = (fetch: WindowFetch) =>
  compose(
    withFetchToken(fetch),
    withFetchSilentAuthenticateAndRetryOn401(),
    withFetchRedirectionOn403()
  );

export default enhance;
