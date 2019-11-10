import { useContext } from 'react';
import { __RouterContext } from 'react-router';
import curry from './currier';

type FeatureHook = {
  state: any;
  actions: any;
  selectors?: any;
  history: any;
  location: any;
}

type FeatureHookProps = {
  context: any;
  actions: any;
  selectors?: any;
}

export default ({ 
  context,
  actions, 
  selectors
}: FeatureHookProps) => {
  return (): FeatureHook => {
    const { state, dispatch }: any = useContext(context);
    const { history, location }: any = useContext(__RouterContext);

    const curriedDispatch = curry({ 
      state,
      dispatch, 
      history
    });

    const curriedActions = Object.keys(actions)
      .reduce((acc, k) => {
        return {
          ...acc,
          [k]: curriedDispatch(actions[k])
        }
      }, {});

    return {
      state,
      actions: curriedActions,
      selectors,
      history,
      location
    };
  }
};