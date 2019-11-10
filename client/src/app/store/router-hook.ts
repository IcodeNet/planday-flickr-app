import { useContext } from 'react';
import { __RouterContext } from 'react-router';

export default () => {
  const { history, location }: any = useContext(__RouterContext);

  return {
    history,
    location
  };
}