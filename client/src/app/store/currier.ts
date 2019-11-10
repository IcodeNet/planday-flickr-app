export default ({ state, dispatch, history }) => (fn: Function) => (localScope: any) =>
  fn({ state, dispatch, history, ...localScope });
