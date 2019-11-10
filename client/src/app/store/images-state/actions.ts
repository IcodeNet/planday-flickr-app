import * as types from './action-types';

import FlickrDataService from './../../services/http-services/data-services/flickr-data.service';
import ServerPhotosResponseModel from './../../domain/photos-paged-view-model';

const loadFlickrImages = ({ term, dispatch }) => {
  dispatch({
    type: types.IMAGES_LOADING
  });

  new FlickrDataService()
    .fetchServerResponsePagedModel(term)
    .then((viewModel: ServerPhotosResponseModel) => {
      dispatch({
        type: types.IMAGES_LOADED,
        payload: viewModel
      });
    })
    .catch(err => {
      dispatch({
        type: types.IMAGES_LOAD_ERROR,
        payload: err
      });
    });
};

export {
  loadFlickrImages
};
