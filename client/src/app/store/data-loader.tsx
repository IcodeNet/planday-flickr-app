import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import { useImagesState } from '.';

const FlickrDataLoader = ({ children }) => {
  const { actions } = useImagesState();

  const {
    loadFlickrImages,
  } = actions;

  useEffect(() => {
    loadFlickrImages();
  }, []);


  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

FlickrDataLoader.propTypes = {
  children: propTypes.node
};

export default FlickrDataLoader;
