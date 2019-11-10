import React from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'layouts/Shell/components/ActivityBar/node_modules/nprogress';
import 'layouts/Shell/components/ActivityBar/node_modules/nprogress/nprogress.css';
import './NProgressRoute.css';

class NProgressRoute extends React.Component {
  UNSAFE_componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }

  render() {
    return <Route {...this.props} />;
  }
}

export default NProgressRoute;
