export default () => {
  window.addEventListener('error', e => {
    e.preventDefault();
  });
}