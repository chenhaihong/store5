import store5 from 'store5';

const key = 'key';
const value = 'hello world';
store5.setLocalStorage(key, value);

function show() {
  console.log(store5.get(key)); // eslint-disable-line
}

show();

if (module.hot) {
  module.hot.accept(() => {
    show();
  });
}
