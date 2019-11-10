import * as actions from './actions';
import { ImagesContext } from './context';
import createFeatureHook from '../create-feature-hook';

export default createFeatureHook({
  context: ImagesContext,
  actions
});