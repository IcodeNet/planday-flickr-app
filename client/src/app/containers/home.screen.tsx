import React from 'react';

import { Header } from '../components/layout/header';
import Sidebar from './../components/layout/sidebar';
import Results from './image-gallery/results';

import './home.style.scss';
import ErrorBoundary from '../components/ErrorBoundary';

const HomeScreen = () => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <div className="main-container">
          <Header />
          <main>
            <Sidebar />
            <Results />
          </main>
        </div>
      </ErrorBoundary>
    </React.Fragment >
  );
};

export default HomeScreen;