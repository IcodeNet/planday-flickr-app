import React from 'react';

import { useImagesState } from '../../store';

import PhotoList from '../../components/gallery/PhotoList';
import ErrorBoundary from '../../components/ErrorBoundary/';
import { CenteredMessage } from './../../components/CenteredMessage'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import './results.style.scss';

const renderData = (data) => {

  return (<React.Fragment>
    <ErrorBoundary>
      <div className={"container"}>
        <PhotoList photos={data} />
      </div>
    </ErrorBoundary>
  </React.Fragment >
  );
};

const renderProgressView = () => (
  <CenteredMessage>
    <div className={"progress"}>
      <div className='loading placeholder'>
        <div>Loading data. Please wait...</div>
        <LoadingSpinner size={'small'} />
      </div>
    </div>
  </CenteredMessage>
);

const renderNoDataView = () => (
  <div className={"noData"}>
    <CenteredMessage>No Data</CenteredMessage>
  </div>
);

const renderErrorView = error => (
  <div
    data-testid="error-view"
  >
    <CenteredMessage>
      {error.message}...
      <hr />
      Please refresh page to retry...
    </CenteredMessage>
  </div>
);


const Results = () => {

  const { state } = useImagesState();
  const { serverResponsePagedModel, isLoading, error } = state;

  console.log(serverResponsePagedModel);

  const photos = serverResponsePagedModel ? serverResponsePagedModel.photosViewModel.photo : [];

  const VISUAL_STATES = {
    ERROR: error => renderErrorView(error),
    NO_DATA_FOUND: renderNoDataView(),
    IS_LOADING_PROGRESS: renderProgressView(),
    HAS_DATA: renderData(photos)
  };

  const noDataFound = !photos || photos.length === 0;

  return (
    <div>
      {error ? VISUAL_STATES['ERROR'](error) :
        isLoading ? VISUAL_STATES['IS_LOADING_PROGRESS'] :
          (noDataFound ? VISUAL_STATES['NO_DATA_FOUND'] : VISUAL_STATES['HAS_DATA'])
      }
    </div>
  );
};

Results.displayName = 'Results';
export default Results