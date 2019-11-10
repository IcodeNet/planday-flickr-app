import React, { Context, Dispatch, useReducer } from 'react';
import propTypes from 'prop-types';
import reducer from './reducer';
import ServerPhotosResponseModel from '../../domain/photos-paged-view-model';

export interface ImagesStateShape {
  serverResponsePagedModel: ServerPhotosResponseModel;
  searchTerm: string;
  error: {};
  isLoading: boolean;
}

const stateDefaults: ImagesStateShape = {
  serverResponsePagedModel: null,
  searchTerm: 'mountains',
  error: null,
  isLoading: false,
};

const ImagesContext: Context<ImagesStateShape> = React.createContext(stateDefaults);

const ImagesProvider = ({ children, initialStateObject = stateDefaults }) => {
  const initialState = initialStateObject;

  const [state, dispatch] = useReducer(reducer, initialState);

  const value: any | { state: ImagesStateShape; dispatch: Dispatch<any> } = {
    state,
    dispatch
  };

  return (
    <ImagesContext.Provider value={value}>
      {children}
    </ImagesContext.Provider>
  );
};

ImagesProvider.propTypes = {
  children: propTypes.node.isRequired,
  initialStateObject: propTypes.object
};

export {
  ImagesContext,
  ImagesProvider
};
