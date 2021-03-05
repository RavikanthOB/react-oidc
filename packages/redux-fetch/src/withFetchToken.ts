import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { fetchToken } from '../../fetch-core/src';

const mapStateToProps = (state: any) => ({ user: state.oidc.user });

type WindowFetch = typeof fetch;

const enhance = (fetch: WindowFetch) =>
  compose(
    connect(
      mapStateToProps,
      null
    ),
    withProps(fetchToken(fetch))
  );

export default enhance;
