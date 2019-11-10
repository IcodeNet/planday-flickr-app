import * as types from './action-types';
import { ImagesStateShape } from './context';
import ServerPhotosResponseModel from '../../domain/photos-paged-view-model';

export type ApplicationAction = (
  IMAGES_LOADING_Action |
  IMAGES_LOAD_ERROR_Action |
  IMAGES_LOADED_Action 
  );


export type IMAGES_LOADING_Action = {
  type: string;
  payload: null;
}

export type IMAGES_LOAD_ERROR_Action = {
  type: string;
  payload: Error;
}

export type IMAGES_LOADED_Action = {
  type: string;
  payload: ServerPhotosResponseModel;
}

/**
 * Takes in the current state and an ApplicationAction and returns a new state
 */
export default (state: ImagesStateShape, action?: ApplicationAction): ImagesStateShape => {
  switch (action.type) {
    case types.IMAGES_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.IMAGES_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.IMAGES_LOADED:
      return {
        ...state,
        isLoading: false,
        serverResponsePagedModel: action.payload as ServerPhotosResponseModel,
      };
    // Default case
    default:
      return state;
  }
}
