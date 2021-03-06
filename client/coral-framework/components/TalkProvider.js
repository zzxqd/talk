import React from 'react';
const PropTypes = require('prop-types');
import {ApolloProvider} from 'react-apollo';

class TalkProvider extends React.Component {
  getChildContext() {
    return {
      eventEmitter: this.props.eventEmitter,
      pym: this.props.pym,
      plugins: this.props.plugins,
      rest: this.props.rest,
      graphqlRegistry: this.props.graphqlRegistry,
      notification: this.props.notification,
      storage: this.props.storage,
      history: this.props.history,
    };
  }

  render() {
    const {children, client, store} = this.props;
    return (
      <ApolloProvider client={client} store={store}>
        {children}
      </ApolloProvider>
    );
  }
}

TalkProvider.childContextTypes = {
  pym: PropTypes.object,
  eventEmitter: PropTypes.object,
  plugins: PropTypes.object,
  rest: PropTypes.func,
  graphqlRegistry: PropTypes.object,
  notification: PropTypes.object,
  storage: PropTypes.object,
  history: PropTypes.object,
};

export default TalkProvider;
