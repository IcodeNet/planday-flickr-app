import React, { Component } from 'react';
import classes from './notfound.module.scss';

class NotfoundScreen extends Component {
  render(): JSX.Element {
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <h1>
            404: The page you are looking for isn’t here
          </h1>
          <p>
            You either tried some non existent route or you came here by
            mistake. Whichever it is, try using the navigation
          </p>
          <img
            alt="Under development"
            className={classes.image}
            src="/images/not_found.png"
          />
        </div>
      </div>
    );
  }
}

export default NotfoundScreen;
