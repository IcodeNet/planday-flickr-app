import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//Paths
import HomeScreen from './containers/home.screen';
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundScreen from './containers/not-found/index';

import PATHS from './paths';


export default class Routes extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={"Loading..."}>
          <Switch>
            <Route
              render={props =>
                <HomeScreen
                  {...props}
                  data-testid="main-home" />
              }
              exact
              path={PATHS.HOME} />

            <Route component={NotFoundScreen} exact path={PATHS.NOT_FOUND} />
            <Redirect to={PATHS.NOT_FOUND} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    );
  }
}