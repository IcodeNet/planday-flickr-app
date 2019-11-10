import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Contexts
import { ImagesProvider } from './store/images-state/context';

// Routes
import Routes from './routes';

// Data Loaders
import FlickrDataLoader from './store/data-loader';

// Browser history
const browserHistory = createBrowserHistory();

const App = (): JSX.Element => {
  return (
    <React.Fragment>
        <ImagesProvider>
            <Router history={browserHistory}>
              <FlickrDataLoader>
                    <Routes />
              </FlickrDataLoader>
            </Router>
        </ImagesProvider>
    </React.Fragment>
  );
};

export default App;
